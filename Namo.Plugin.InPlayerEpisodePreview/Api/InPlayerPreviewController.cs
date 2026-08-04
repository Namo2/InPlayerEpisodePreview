using MediaBrowser.Controller.Configuration;
using MediaBrowser.Controller.Library;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Concurrent;
using System.Reflection;
using Jellyfin.Data.Enums;
using MediaBrowser.Controller.Dto;
using MediaBrowser.Controller.Entities;
using MediaBrowser.Controller.Entities.Movies;
using MediaBrowser.Controller.Entities.TV;
using MediaBrowser.Controller.Net;
using MediaBrowser.Controller.Playlists;
using MediaBrowser.Controller.Session;
using MediaBrowser.Model.Entities;
using MediaBrowser.Model.Querying;
using MediaBrowser.Model.Session;
using Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;
using Namo.Plugin.InPlayerEpisodePreview.Configuration;
using Namo.Plugin.InPlayerEpisodePreview.Services;

namespace Namo.Plugin.InPlayerEpisodePreview.Api;

/// <summary>
/// Controller for accessing show data.
/// </summary>
[ApiController]
[Route("InPlayerPreview")]
[Authorize]
public class InPlayerPreviewController : ControllerBase
{
    private readonly Assembly _assembly;
    private readonly string _playerPreviewScriptPath;

    private readonly ILogger<InPlayerPreviewController> _logger;
    private readonly ILibraryManager _libraryManager;
    private readonly IServerConfigurationManager _configurationManager;
    private readonly ISessionManager _sessionManager;
    private readonly IUserManager _userManager;
    private readonly IDtoService _dtoService;
    private readonly IAuthorizationContext _authorizationContext;
    private readonly FolderPreviewService _folderPreviewService;

    private readonly PluginConfiguration _config;

    /// <summary>
    /// Tracks which collection/playlist a play action originated from, keyed by "{userId}:{deviceId}".
    /// </summary>
    private static readonly ConcurrentDictionary<string, Guid> SourceCollectionByDevice = new();

    /// <summary>
    ///  limit database query to only necessary fields
    /// </summary>
    private static readonly DtoOptions PreviewDtoOptions = new(false)
    {
        Fields = [ItemFields.Overview],
        ImageTypes = [ImageType.Primary],
        ImageTypeLimit = 1
    };

    private const int UnknownWatchedCount = -1;

    /// <summary>
    /// Initializes a new instance of the <see cref="InPlayerPreviewController"/> class.
    /// </summary>
    public InPlayerPreviewController(
        ILibraryManager libraryManager,
        ILogger<InPlayerPreviewController> logger,
        IServerConfigurationManager configurationManager,
        ISessionManager sessionManager,
        IUserManager userManager,
        IDtoService dtoService,
        IAuthorizationContext authorizationContext,
        FolderPreviewService folderPreviewService)
    {
        _assembly = Assembly.GetExecutingAssembly();
        _playerPreviewScriptPath =
            $"{InPlayerEpisodePreviewPlugin.Instance?.GetType().Namespace}.Web.InPlayerPreview.js";

        _libraryManager = libraryManager;
        _logger = logger;
        _configurationManager = configurationManager;
        _sessionManager = sessionManager;
        _userManager = userManager;
        _dtoService = dtoService;
        _authorizationContext = authorizationContext;
        _folderPreviewService = folderPreviewService;

        _config = InPlayerEpisodePreviewPlugin.Instance!.Configuration;
    }

    /// <summary>
    /// Get embedded javascript file for client-side code.
    /// </summary>
    /// <response code="200">Javascript file successfully returned.</response>
    /// <response code="404">File not found.</response>
    /// <returns>The "inPlayerPreview.js" embedded file.</returns>
    [HttpGet("ClientScript")]
    [AllowAnonymous]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Produces("application/javascript")]
    public ActionResult GetClientScript()
    {
        var scriptStream = _assembly.GetManifestResourceStream(_playerPreviewScriptPath);
        if (scriptStream == null)
            return NotFound();

        return File(scriptStream, "application/javascript");
    }

    /// <summary>
    /// This controller starts playback of a new item.
    /// Could be replaced by /Sessions/{sessionId}/Playing, if frontend loads session itself
    /// </summary>
    /// <param name="id"></param>
    /// <param name="ticks"></param>
    /// <returns></returns>
    [HttpGet("Items/{id}/Play/{ticks}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult> StartMedia([FromRoute] Guid id, [FromRoute] long ticks = 0)
    {
        SessionInfo? session = await ResolveCurrentSessionAsync();
        if (session is null)
        {
            _logger.LogInformation("Couldn't find a valid session for this user");
            return NotFound("Couldn't find a valid session for this user");
        }

        BaseItem? item = _libraryManager.GetItemById(id);
        if (item is null)
        {
            const string message = "Couldn't find item to play";
            _logger.LogInformation(message);
            return NotFound(message);
        }

        await _sessionManager.SendPlayCommand(session.Id, session.Id,
            new PlayRequest
            {
                ItemIds = [item.Id],
                StartPositionTicks = ticks,
                PlayCommand = PlayCommand.PlayNow,
            }, CancellationToken.None);

        return NoContent();
    }

    /// <summary>
    /// Returns the id of the item of  the current session.
    /// This is experimental and will maybe be used in future releases
    /// </summary>
    [HttpGet("NowPlayingItem")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult> GetNowPlayingItem()
    {
        BaseItem? nowPlayingItem = (await ResolveCurrentSessionAsync())?.FullNowPlayingItem;
        if (nowPlayingItem is null)
            return NotFound("No item currently playing for this session");

        return Ok(nowPlayingItem.Id);
    }

    /// <summary>
    /// Resolves the session for the current request by using the AuthorizationToken from the request
    /// </summary>
    private async Task<SessionInfo?> ResolveCurrentSessionAsync()
    {
        AuthorizationInfo authorizationInfo = await _authorizationContext.GetAuthorizationInfo(HttpContext);
        if (string.IsNullOrEmpty(authorizationInfo.Token))
        {
            _logger.LogWarning("Couldn't resolve an auth token for the current request");
            return null;
        }

        var remoteEndpoint = HttpContext.Connection.RemoteIpAddress?.ToString() ?? string.Empty;
        return await _sessionManager.GetSessionByAuthenticationToken(authorizationInfo.Token, authorizationInfo.DeviceId, remoteEndpoint);
    }

    /// <summary>
    /// This controller returns the description of the given item.
    /// Could be replaced by /Users/{userId}/Items/{itemId}, if frontend loads whole data
    /// </summary>
    /// <param name="id"></param>
    /// <returns></returns>
    [HttpGet("Items/{id}")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult GetMediaDescription([FromRoute] Guid id)
    {
        BaseItem? item = _libraryManager.GetItemById(id);
        if (item is not null)
            return new OkObjectResult(new ItemDescriptionDto(item.Overview));

        // Error case
        const string message = "Couldn't find item to play";
        _logger.LogInformation(message);
        return NotFound(message);
    }

    /// <summary>
    /// This controller returns some values from the server configuration which are needed in the frontend.
    /// </summary>
    /// <returns></returns>
    [HttpGet("ServerSettings")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult GetMediaDescription()
    {
        var serverSettings = new ServerSettingsDto(
            _configurationManager.Configuration.MinResumePct,
            _configurationManager.Configuration.MaxResumePct,
            _configurationManager.Configuration.MinResumeDurationSeconds
        );
        return new OkObjectResult(serverSettings);
    }

    /// <summary>
    /// Returns preview data for the given item
    /// </summary>
    [HttpGet("Users/{userId}/{deviceId}/Items/{itemId}/PreviewData")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult GetItemPreviewData([FromRoute] Guid userId, [FromRoute] string deviceId, [FromRoute] Guid itemId)
    {
        var user = _userManager.GetUserById(userId);
        if (user is null)
            return NotFound();

        var item = _libraryManager.GetItemById(itemId);
        if (item is null)
            return NotFound();

        if (SourceCollectionByDevice.TryGetValue($"{userId}:{deviceId}", out var sourceId)
            && _libraryManager.GetItemById(sourceId) is Folder source and (Playlist or BoxSet))
        {
            var children = _folderPreviewService.GetCachedFolderChildren(source, user);
            var memberIndex = children.FindIndex(c => c.Id == itemId);

            switch (memberIndex)
            {
                case >= 0 when source is Playlist playlist:
                {
                    var stats = _folderPreviewService.GetWatchStats(children, user);
                    var playlistGroup = new PreviewGroup(playlist.Id, playlist.Name, 0, stats.PlayedItemCount, stats.TotalItemCount, stats.PlayedRuntimeTicks, stats.TotalRuntimeTicks);
                    return Ok(new ItemPreviewDataResult(BaseItemKind.Playlist, playlist.Name, [playlistGroup], playlist.Id, memberIndex));
                }
                case >= 0 when source is BoxSet boxSet:
                {
                    var stats = _folderPreviewService.GetWatchStats(children, user);
                    var boxSetGroup = new PreviewGroup(boxSet.Id, boxSet.Name, 0, stats.PlayedItemCount, stats.TotalItemCount, stats.PlayedRuntimeTicks, stats.TotalRuntimeTicks);
                    return Ok(new ItemPreviewDataResult(BaseItemKind.BoxSet, boxSet.Name, [boxSetGroup], boxSet.Id, memberIndex));
                }
                default:
                    SourceCollectionByDevice.TryRemove($"{userId}:{deviceId}", out _);
                    break;
            }
        }

        if (item is Episode episode)
        {
            var seasonId = episode.SeasonId != Guid.Empty ? episode.SeasonId : episode.ParentId;

            var seasons = _libraryManager.QueryItems(new InternalItemsQuery(user)
            {
                ParentId = episode.SeriesId,
                IncludeItemTypes = [BaseItemKind.Season]
            }).Items;

            List<PreviewGroup> groups = [
                .. seasons
                    .Where(s => _config.DisplayMissingEpisodes || s.LocationType != LocationType.Virtual)
                    .Select(s => !_config.ShowWatchedCount
                        ? new PreviewGroup(s.Id, s.Name, s.IndexNumber ?? 0, 0, 0)
                        : new PreviewGroup(s.Id, s.Name, s.IndexNumber ?? 0, UnknownWatchedCount, UnknownWatchedCount, UnknownWatchedCount, UnknownWatchedCount)
                    )
            ];

            List<Episode> episodesInSeason = _libraryManager.GetItemById(seasonId) is Folder seasonFolder
                ? [
                    .._folderPreviewService.GetCachedFolderChildren(seasonFolder, user)
                    .OfType<Episode>()
                    .OrderBy(e => e.IndexNumber ?? 0)
                ]
                : [];
            var activeItemIndex = Math.Max(0, episodesInSeason.FindIndex(e => e.Id == episode.Id));

            return Ok(new ItemPreviewDataResult(BaseItemKind.Episode, null, groups, seasonId, activeItemIndex));
        }

        var itemDto = _dtoService.GetBaseItemDtos([item], PreviewDtoOptions, user)[0];
        
        if (itemDto.Type == BaseItemKind.Video && _libraryManager.GetItemById(item.ParentId) is Folder parentFolder)
        {
            var groups = _folderPreviewService.GetFolderGroups(parentFolder, user);

            List<Video> videosInFolder = [.._folderPreviewService.GetCachedFolderChildren(parentFolder, user).OfType<Video>().OrderBy(v => v.SortName)];
            var activeVideoIndex = Math.Max(0, videosInFolder.FindIndex(v => v.Id == item.Id));

            return Ok(new ItemPreviewDataResult(BaseItemKind.Folder, null, groups, parentFolder.Id, activeVideoIndex));
        }

        var itemStats = _folderPreviewService.GetWatchStats([item], user);
        var itemGroup = new PreviewGroup(item.Id, null, 0, itemStats.PlayedItemCount, itemStats.TotalItemCount, itemStats.PlayedRuntimeTicks, itemStats.TotalRuntimeTicks);
        return Ok(new ItemPreviewDataResult(itemDto.Type, null, [itemGroup], item.Id, 0));
    }

    /// <summary>
    /// Returns a page of items for a given group id
    /// </summary>
    [HttpGet("Users/{userId}/Groups/{groupId}/Items")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult GetGroupItems([FromRoute] Guid userId, [FromRoute] Guid groupId,
        [FromQuery] int startIndex = 0, [FromQuery] int limit = 10)
    {
        var user = _userManager.GetUserById(userId);
        if (user is null)
            return NotFound();

        var groupItem = _libraryManager.GetItemById(groupId);
        if (groupItem is null)
            return NotFound();

        if (groupItem is Season seasonGroup)
        {
            List<Episode> episodesInSeason = [.._folderPreviewService.GetCachedFolderChildren(seasonGroup, user)
                .OfType<Episode>()
                .OrderBy(e => e.IndexNumber ?? 0)];
            List<Episode> page = [..episodesInSeason.Skip(startIndex).Take(limit)];

            var episodeDtos = _dtoService.GetBaseItemDtos([..page], PreviewDtoOptions, user);
            return Ok(new GroupItemsResult([..episodeDtos.Select(d => d.ToPreviewItemDto())], episodesInSeason.Count));
        }

        if (groupItem is Playlist or BoxSet)
        {
            var allChildren = _folderPreviewService.GetCachedFolderChildren((Folder)groupItem, user);
            List<BaseItem> page = [..allChildren.Skip(startIndex).Take(limit)];
            var pageDtos = _dtoService.GetBaseItemDtos(page, PreviewDtoOptions, user);
            return Ok(new GroupItemsResult([..pageDtos.Select(d => d.ToPreviewItemDto())], allChildren.Count));
        }

        if (groupItem is Folder folderGroup)
        {
            List<Video> videosInFolder = [.._folderPreviewService.GetCachedFolderChildren(folderGroup, user).OfType<Video>().OrderBy(v => v.SortName)];
            List<Video> page = [..videosInFolder.Skip(startIndex).Take(limit)];

            var videoDtos = _dtoService.GetBaseItemDtos([..page], PreviewDtoOptions, user);
            return Ok(new GroupItemsResult([..videoDtos.Select(d => d.ToPreviewItemDto())], videosInFolder.Count));
        }

        if (startIndex > 0)
            return Ok(new GroupItemsResult([], 1));

        var itemDto = _dtoService.GetBaseItemDtos([groupItem], PreviewDtoOptions, user)[0];
        return Ok(new GroupItemsResult([itemDto.ToPreviewItemDto()], 1));
    }

    /// <summary>
    /// Returns the watched count for a single group
    /// </summary>
    [HttpGet("Users/{userId}/Groups/{groupId}/WatchedCount")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult GetGroupWatchedCount([FromRoute] Guid userId, [FromRoute] Guid groupId)
    {
        var user = _userManager.GetUserById(userId);
        if (user is null)
            return NotFound();

        var groupItem = _libraryManager.GetItemById(groupId);
        if (groupItem is null)
            return NotFound();

        List<BaseItem> children = groupItem switch
        {
            Season season => [.._folderPreviewService.GetCachedFolderChildren(season, user).OfType<Episode>()],
            Playlist or BoxSet => _folderPreviewService.GetCachedFolderChildren((Folder)groupItem, user),
            Folder folder => [.._folderPreviewService.GetCachedFolderChildren(folder, user).OfType<Video>()],
            _ => [groupItem]
        };

        var stats = _folderPreviewService.GetWatchStats(children, user);
        return Ok(new WatchedCountResult(stats.PlayedItemCount, stats.TotalItemCount, stats.PlayedRuntimeTicks, stats.TotalRuntimeTicks));
    }

    /// <summary>
    /// Returns a group for every Collection/Playlist that contains the given item.
    /// </summary>
    [HttpGet("Users/{userId}/Items/{itemId}/ContainingCollections")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult GetContainingCollections([FromRoute] Guid userId, [FromRoute] Guid itemId)
    {
        var user = _userManager.GetUserById(userId);
        if (user is null)
            return NotFound();

        var item = _libraryManager.GetItemById(itemId);
        if (item is null)
            return NotFound();

        return Ok(_folderPreviewService.GetContainingCollectionGroups(item, user));
    }

    /// <summary>
    /// Records which collection/playlist a play action originated from for a user/device.
    /// </summary>
    [HttpGet("Users/{userId}/{deviceId}/SourceCollection/{collectionId}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public ActionResult SetSourceCollection([FromRoute] Guid userId, [FromRoute] string deviceId, [FromRoute] Guid collectionId)
    {
        SourceCollectionByDevice[$"{userId}:{deviceId}"] = collectionId;
        return NoContent();
    }

    /// <summary>
    /// Returns the collection/playlist id previously recorded for a user/device, if any.
    /// </summary>
    [HttpGet("Users/{userId}/{deviceId}/SourceCollection")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult GetSourceCollection([FromRoute] Guid userId, [FromRoute] string deviceId)
    {
        if (SourceCollectionByDevice.TryGetValue($"{userId}:{deviceId}", out var collectionId))
            return Ok(collectionId);

        return NotFound();
    }
}