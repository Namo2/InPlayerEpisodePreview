using MediaBrowser.Common.Configuration;
using MediaBrowser.Controller.Configuration;
using MediaBrowser.Controller.Library;
using MediaBrowser.Controller.MediaEncoding;
using MediaBrowser.Model.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.ComponentModel.DataAnnotations;
using System.Net.Mime;
using System.Reflection;
using MediaBrowser.Controller.Dto;
using MediaBrowser.Controller.Entities;
using MediaBrowser.Controller.Persistence;
using Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;
using Namo.Plugin.InPlayerEpisodePreview.Configuration;

namespace Namo.Plugin.InPlayerEpisodePreview.Api;

/// <summary>
/// Controller for accessing show data.
/// </summary>
[ApiController]
[Route("InPlayerPreview")]
public class InPlayerPreviewController : ControllerBase
{
    private readonly Assembly _assembly;
    private readonly string _playerPreviewScriptPath;

    private readonly ILogger<InPlayerPreviewController> _logger;
    private readonly ILibraryManager _libraryManager;
    private readonly IItemRepository _itemRepository;
    private readonly IFileSystem _fileSystem;
    private readonly ILoggerFactory _loggerFactory;
    private readonly IApplicationPaths _appPaths;
    private readonly ILibraryMonitor _libraryMonitor;
    private readonly IMediaEncoder _mediaEncoder;
    private readonly IServerConfigurationManager _configurationManager;
    private readonly EncodingHelper _encodingHelper;

    private readonly PluginConfiguration _config;

    /// <summary>
    /// Initializes a new instance of the <see cref="InPlayerPreviewController"/> class.
    /// </summary>
    public InPlayerPreviewController(
        ILibraryManager libraryManager,
        IItemRepository itemRepository,
        IFileSystem fileSystem,
        ILogger<InPlayerPreviewController> logger,
        ILoggerFactory loggerFactory,
        IApplicationPaths appPaths,
        ILibraryMonitor libraryMonitor,
        IMediaEncoder mediaEncoder,
        IServerConfigurationManager configurationManager,
        EncodingHelper encodingHelper)
    {
        _assembly = Assembly.GetExecutingAssembly();
        _playerPreviewScriptPath = $"{InPlayerEpisodePreviewPlugin.Instance?.GetType().Namespace}.Web.inPlayerPreview.js";

        _libraryManager = libraryManager;
        _itemRepository = itemRepository;
        _logger = logger;
        _fileSystem = fileSystem;
        _loggerFactory = loggerFactory;
        _appPaths = appPaths;
        _libraryMonitor = libraryMonitor;
        _mediaEncoder = mediaEncoder;
        _configurationManager = configurationManager;
        _encodingHelper = encodingHelper;

        _config = InPlayerEpisodePreviewPlugin.Instance!.Configuration;
    }

    /// <summary>
    /// Get embedded javascript file for client-side code.
    /// </summary>
    /// <response code="200">Javascript file successfully returned.</response>
    /// <response code="404">File not found.</response>
    /// <returns>The "inPlayerPreview.js" embedded file.</returns>
    [HttpGet("ClientScript")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Produces("application/javascript")]
    public ActionResult GetClientScript()
    {
        var scriptStream = _assembly.GetManifestResourceStream(_playerPreviewScriptPath);
        _logger.LogError("InPlayerEpisodePreviewPlugin: {0}", _playerPreviewScriptPath);
        if (scriptStream == null)
            return NotFound();

        return File(scriptStream, "application/javascript");
    }

    /// <summary>
    /// Get a Season element which contains a list of episodes with their names and indexes.
    /// </summary>
    /// <param name="itemId">Item id.</param>
    /// <response code="200">Manifest successfully found and returned.</response>
    /// <response code="404">Item not found.</response>
    /// <returns>A JSON response as read from manfiest file, or a <see cref="NotFoundResult"/>.</returns>
    [HttpGet("{itemId}/Season")]
    // [Authorize(Policy = "DefaultAuthorization")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Produces(MediaTypeNames.Application.Json)]
    public ActionResult GetSeason([FromRoute, Required] Guid itemId)
    {
        var item = _libraryManager.GetItemById(itemId);
        if (item == null)
            return NotFound();

        var season = _libraryManager.GetItemById(item.ParentId);
        if (season == null)
            return NotFound();

        var episodeItems = _itemRepository.GetItemList(new InternalItemsQuery
        {
            Parent = season,
            GroupByPresentationUniqueKey = false,
            DtoOptions = new DtoOptions(true)
        });

        return Ok(new SeasonDto(season.Name, season.IndexNumber, createEpisodeDtos(episodeItems)));
    }

    /// <summary>
    /// Get a Show element which contains a list of seasons with their names, indexes and <see cref="EpisodeDto">episodes</see>.
    /// </summary>
    /// <param name="itemId">Item id.</param>
    /// <response code="200">Manifest successfully found and returned.</response>
    /// <response code="404">Item not found.</response>
    /// <returns>A JSON response as read from manfiest file, or a <see cref="NotFoundResult"/>.</returns>
    [HttpGet("{itemId}/Show")]
    // [Authorize(Policy = "DefaultAuthorization")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [Produces(MediaTypeNames.Application.Json)]
    public ActionResult GetShow([FromRoute, Required] Guid itemId)
    {
        var item = _libraryManager.GetItemById(itemId);
        if (item == null)
            return NotFound();

        var seasonBaseItem = _libraryManager.GetItemById(item.ParentId);
        if (seasonBaseItem == null)
            return NotFound();

        var showBaseItem = _libraryManager.GetItemById(seasonBaseItem.ParentId);
        if (showBaseItem == null)
            return NotFound();

        var seasonItems = _itemRepository.GetItemList(new InternalItemsQuery
        {
            Parent = showBaseItem,
            GroupByPresentationUniqueKey = false,
            DtoOptions = new DtoOptions(true)
        });

        List<SeasonDto> seasons = new();
        foreach (var season in seasonItems)
        {
            var episodeItems = _itemRepository.GetItemList(new InternalItemsQuery
            {
                Parent = season,
                GroupByPresentationUniqueKey = false,
                DtoOptions = new DtoOptions(true)
            });

            seasons.Add(new SeasonDto(season.Name, season.IndexNumber, createEpisodeDtos(episodeItems)));
        }

        return Ok(new SeriesDto(showBaseItem.Name, showBaseItem.IndexNumber, seasons));
    }

    private List<EpisodeDto> createEpisodeDtos(List<BaseItem> baseItems)
    {
        List<EpisodeDto> episodes = new();
        foreach (var ancestor in baseItems)
            episodes.Add(new EpisodeDto(ancestor.Name, ancestor.IndexNumber));

        episodes.Sort((a, b) => a.IndexNumber.CompareTo(b.IndexNumber));
        return episodes;
    }
}
