using MediaBrowser.Common.Configuration;
using MediaBrowser.Controller.Configuration;
using MediaBrowser.Controller.Library;
using MediaBrowser.Controller.MediaEncoding;
using MediaBrowser.Model.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Reflection;
using MediaBrowser.Controller.Entities;
using MediaBrowser.Controller.Persistence;
using MediaBrowser.Controller.Session;
using MediaBrowser.Model.Session;
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
    private readonly ISessionManager _sessionManager;
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
        ISessionManager sessionManager,
        EncodingHelper encodingHelper)
    {
        _assembly = Assembly.GetExecutingAssembly();
        _playerPreviewScriptPath = $"{InPlayerEpisodePreviewPlugin.Instance?.GetType().Namespace}.Web.InPlayerPreview.js";

        _libraryManager = libraryManager;
        _itemRepository = itemRepository;
        _logger = logger;
        _fileSystem = fileSystem;
        _loggerFactory = loggerFactory;
        _appPaths = appPaths;
        _libraryMonitor = libraryMonitor;
        _mediaEncoder = mediaEncoder;
        _configurationManager = configurationManager;
        _sessionManager = sessionManager;
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
    /// This controller starts a new episode.
    /// Could be replaced by /Sessions/{sessionId}/Playing, if frontend loads session itself
    /// </summary>
    /// <param name="userId"></param>
    /// <param name="id"></param>
    /// <param name="ticks"></param>
    /// <returns></returns>
    [HttpGet("Users/{userId}/Items/{id}/Play/{ticks}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public ActionResult StartMedia([FromRoute] Guid userId, [FromRoute] Guid id, [FromRoute] long ticks = 0)
    {
        SessionInfo? session = _sessionManager.Sessions.FirstOrDefault(session => session.UserId.Equals(userId));
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
        
        _sessionManager.SendPlayCommand(session.Id, session.Id, 
            new PlayRequest
            {
                ItemIds = [item.Id],
                StartPositionTicks = ticks,
                PlayCommand = PlayCommand.PlayNow,
            }, CancellationToken.None);
        
        return NoContent();
    }
    
    /// <summary>
    /// This controller returns the description of the given episode.
    /// Could be replaced by /Users/{userId}/Items/{episodeId}, if frontend loads whole data
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
            return new OkObjectResult(new EpisodeDescriptionDto(item.Overview));
        
        // Error case
        const string message = "Couldn't find item to play";
        _logger.LogInformation(message);
        return NotFound(message);
    }
}