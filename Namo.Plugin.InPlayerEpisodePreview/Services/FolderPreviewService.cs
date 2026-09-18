using System.Collections.Concurrent;
using Jellyfin.Data.Enums;
using MediaBrowser.Controller.Entities;
using MediaBrowser.Controller.Library;
using MediaBrowser.Model.Entities;
using Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;
using Namo.Plugin.InPlayerEpisodePreview.Configuration;

namespace Namo.Plugin.InPlayerEpisodePreview.Services;

/// <summary>
/// Caches folder children and builds PreviewGroups/played-counts for the folder-based grouping path (Playlists, BoxSets and plain video folders).
/// </summary>
public class FolderPreviewService(ILibraryManager libraryManager, IUserDataManager userDataManager)
{
    private static PluginConfiguration Config => InPlayerEpisodePreviewPlugin.Instance!.Configuration;

    private readonly ConcurrentDictionary<(Guid FolderId, Guid UserId), (DateTime CachedAt, List<BaseItem> Children)> _folderChildrenCache = new();

    private readonly ConcurrentDictionary<Guid, (DateTime CachedAt, List<Folder> Collections)> _collectionsCache = new();

    private static readonly TimeSpan FolderChildrenCacheTtl = TimeSpan.FromMinutes(5);

    /// <summary>
    /// Counts how many of the given items are marked played for <paramref name="user"/>
    /// </summary>
    public WatchStats GetWatchStats(IEnumerable<BaseItem> items, User user)
    {
        if (!Config.ShowWatchedCount)
            return new WatchStats(0, 0, 0, 0);

        bool needsRuntime = (WatchCountDisplayMode)Config.WatchCountDisplayMode != WatchCountDisplayMode.Count;

        int totalCount = 0;
        int playedCount = 0;
        long totalTicks = 0;
        long playedTicks = 0;

        foreach (var item in items)
        {
            totalCount++;
            var userData = userDataManager.GetUserData(user, item);
            bool played = userData?.Played ?? false;
            if (played)
                playedCount++;

            if (!needsRuntime)
                continue;

            long itemTicks = item.RunTimeTicks ?? 0;
            totalTicks += itemTicks;
            playedTicks += played ? itemTicks : userData?.PlaybackPositionTicks ?? 0;
        }

        return new WatchStats(playedCount, totalCount, playedTicks, totalTicks);
    }

    /// <summary>
    /// </summary>
    public List<PreviewGroup> GetFolderGroups(Folder folder, User user)
    {
        var ownChildren = GetCachedFolderChildren(folder, user);
        if (ownChildren.OfType<Folder>().Any())
            return BuildFolderGroups(ownChildren, folder.Id, user);

        if (libraryManager.GetItemById(folder.ParentId) is Folder parent)
            return BuildFolderGroups(GetCachedFolderChildren(parent, user), parent.Id, user);

        List<Video> videosInFolder = [..ownChildren.OfType<Video>()];
        var stats = GetWatchStats(videosInFolder, user);
        return [new PreviewGroup(folder.Id, folder.Name, 0, stats.PlayedItemCount, stats.TotalItemCount, stats.PlayedRuntimeTicks, stats.TotalRuntimeTicks)];
    }

    /// <summary>
    /// Goes through all children and creates a group for each folder.
    /// Folder with no videos will be skipped.
    /// Loose Videos will be sorted under a static group "Videos"
    /// </summary>
    private List<PreviewGroup> BuildFolderGroups(List<BaseItem> children, Guid looseVideosGroupId, User user)
    {
        List<PreviewGroup> groups = [];
        foreach (var subfolder in children.OfType<Folder>().OrderBy(f => f.SortName))
        {
            List<Video> videosInSubfolder = [..GetCachedFolderChildren(subfolder, user).OfType<Video>()];
            if (videosInSubfolder.Count == 0)
                continue;

            var subfolderStats = GetWatchStats(videosInSubfolder, user);
            groups.Add(new PreviewGroup(subfolder.Id, subfolder.Name, groups.Count, subfolderStats.PlayedItemCount, subfolderStats.TotalItemCount, subfolderStats.PlayedRuntimeTicks, subfolderStats.TotalRuntimeTicks));
        }

        List<Video> looseVideos = [..children.OfType<Video>()];
        if (looseVideos.Count > 0)
        {
            var looseStats = GetWatchStats(looseVideos, user);
            groups.Add(new PreviewGroup(looseVideosGroupId, "Videos", groups.Count, looseStats.PlayedItemCount, looseStats.TotalItemCount, looseStats.PlayedRuntimeTicks, looseStats.TotalRuntimeTicks));
        }

        return groups;
    }

    /// <summary>
    /// Finds all Collections/Playlists that contain <paramref name="movie"/> and builds a PreviewGroup for each
    /// </summary>
    public List<PreviewGroup> GetContainingCollectionGroups(BaseItem movie, User user)
    {
        List<PreviewGroup> groups = [];
        foreach (var collection in GetCachedCollections(user))
        {
            var children = GetCachedFolderChildren(collection, user);
            if (children.All(c => c.Id != movie.Id))
                continue;

            var stats = GetWatchStats(children, user);
            groups.Add(new PreviewGroup(collection.Id, collection.Name, groups.Count, stats.PlayedItemCount, stats.TotalItemCount, stats.PlayedRuntimeTicks, stats.TotalRuntimeTicks));
        }

        return groups;
    }

    /// <summary>
    /// Get all BoxSets/Playlists visible to the user from cache or load them
    /// </summary>
    private List<Folder> GetCachedCollections(User user)
    {
        if (_collectionsCache.TryGetValue(user.Id, out var cached) && DateTime.UtcNow - cached.CachedAt < FolderChildrenCacheTtl)
            return cached.Collections;

        List<Folder> collections = [..libraryManager.QueryItems(new InternalItemsQuery(user)
        {
            IncludeItemTypes = [BaseItemKind.BoxSet, BaseItemKind.Playlist],
            Recursive = true
        }).Items.OfType<Folder>()];

        _collectionsCache[user.Id] = (DateTime.UtcNow, collections);
        return collections;
    }

    /// <summary>
    /// If configured, expands each stacked video into itself plus its "additional parts" -
    /// sibling files (e.g. named "Part 1"/"Part 2") that Jellyfin's naming resolver merges into one
    /// library item instead of listing them as separate children - so each part can be listed and
    /// played as its own entry. A part's DTO needs its stack's primary video passed as "owner" to
    /// inherit fields (e.g. image) the part itself was never given its own metadata for.
    /// </summary>
    /// <remarks>
    /// Video.GetAdditionalParts() takes no arguments on 10.10.7/10.11.0, but gained an optional
    /// User parameter on 12.0 to filter out parts the user isn't allowed to see. Since that overload
    /// isn't available everywhere, access is checked here instead via BaseItem.IsVisible(User), which
    /// has the same public signature on all three targeted versions.
    /// </remarks>
    public List<(Video Item, Video? Owner)> ExpandAdditionalParts(IEnumerable<Video> videos, User user)
    {
        List<(Video, Video?)> result = [];
        foreach (var video in videos)
        {
            result.Add((video, null));
            if (Config.DisplayAdditionalVideoParts && video.IsStacked)
                result.AddRange(video.GetAdditionalParts().Where(part => part.IsVisible(user)).Select(part => (part, (Video?)video)));
        }

        return result;
    }

    /// <summary>
    /// Get a Playlist/BoxSet's children from cache or load it,
    /// </summary>
    public List<BaseItem> GetCachedFolderChildren(Folder folder, User user)
    {
        var key = (folder.Id, user.Id);
        if (_folderChildrenCache.TryGetValue(key, out var cached) && DateTime.UtcNow - cached.CachedAt < FolderChildrenCacheTtl)
            return cached.Children;
        
        List<BaseItem> children = [
            .. folder
                .GetChildren(user, true, new InternalItemsQuery(user))
                .Where(c => Config.DisplayMissingEpisodes || c.LocationType != LocationType.Virtual)
        ];
        _folderChildrenCache[key] = (DateTime.UtcNow, children);
        return children;
    }
}
