using System.Collections.Concurrent;
using Jellyfin.Database.Implementations.Entities;
using MediaBrowser.Controller.Entities;
using MediaBrowser.Controller.Library;
using Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;
using Namo.Plugin.InPlayerEpisodePreview.Configuration;

namespace Namo.Plugin.InPlayerEpisodePreview.Services;

/// <summary>
/// Caches folder children and builds PreviewGroups/played-counts for the folder-based grouping path (Playlists, BoxSets and plain video folders).
/// </summary>
public class FolderPreviewService(ILibraryManager libraryManager, IUserDataManager userDataManager)
{
    private readonly PluginConfiguration _config = InPlayerEpisodePreviewPlugin.Instance!.Configuration;

    private readonly ConcurrentDictionary<(Guid FolderId, Guid UserId), (DateTime CachedAt, List<BaseItem> Children)> _folderChildrenCache = new();

    private static readonly TimeSpan FolderChildrenCacheTtl = TimeSpan.FromMinutes(5);

    /// <summary>
    /// Counts how many of the given items are marked played for <paramref name="user"/>.
    /// </summary>
    public int CountPlayed(IEnumerable<BaseItem> items, User user)
    {
        if (!_config.ShowWatchedCount)
            return 0;

        return items.Count(item => userDataManager.GetUserData(user, item)?.Played ?? false);
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
        return [new PreviewGroup(folder.Id, folder.Name, 0, CountPlayed(videosInFolder, user), videosInFolder.Count)];
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

            groups.Add(new PreviewGroup(subfolder.Id, subfolder.Name, groups.Count, CountPlayed(videosInSubfolder, user), videosInSubfolder.Count));
        }

        List<Video> looseVideos = [..children.OfType<Video>()];
        if (looseVideos.Count > 0)
            groups.Add(new PreviewGroup(looseVideosGroupId, "Videos", groups.Count, CountPlayed(looseVideos, user), looseVideos.Count));

        return groups;
    }

    /// <summary>
    /// Get a Playlist/BoxSet's children from cache or load it,
    /// </summary>
    public List<BaseItem> GetCachedFolderChildren(Folder folder, User user)
    {
        var key = (folder.Id, user.Id);
        if (_folderChildrenCache.TryGetValue(key, out var cached) && DateTime.UtcNow - cached.CachedAt < FolderChildrenCacheTtl)
            return cached.Children;

        List<BaseItem> children = [..folder.GetChildren(user, true, new InternalItemsQuery(user))];
        _folderChildrenCache[key] = (DateTime.UtcNow, children);
        return children;
    }
}
