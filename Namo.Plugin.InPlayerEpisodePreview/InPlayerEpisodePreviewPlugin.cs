using MediaBrowser.Common.Configuration;
using MediaBrowser.Common.Plugins;
using MediaBrowser.Controller.Configuration;
using MediaBrowser.Model.Plugins;
using MediaBrowser.Model.Serialization;
using Microsoft.Extensions.Logging;
using Namo.Plugin.InPlayerEpisodePreview.Configuration;

namespace Namo.Plugin.InPlayerEpisodePreview;

/// <summary>
/// InPlayerEpisodePreview plugin.
/// </summary>
public class InPlayerEpisodePreviewPlugin : BasePlugin<PluginConfiguration>, IHasWebPages
{
    /// <inheritdoc />
    public override string Name => "InPlayerEpisodePreview";

    /// <inheritdoc />
    public override Guid Id => Guid.Parse("73833d5f-0bcb-45dc-ab8b-7ce668f4345d");

    /// <inheritdoc />
    public override string Description => "Adds episode preview functionality to Jellyfin.";
    
    /// <summary>
    /// Gets the current plugin instance.
    /// </summary>
    public static InPlayerEpisodePreviewPlugin Instance { get; private set; } = null!;
    
    internal IServerConfigurationManager ServerConfigurationManager { get; set; }
    internal IApplicationPaths ViewableApplicationPaths { get; set; }
    internal ILogger<InPlayerEpisodePreviewPlugin> Logger { get; set; }

    /// <summary>
    /// Initializes a new instance of the <see cref="InPlayerEpisodePreviewPlugin"/> class.
    /// </summary>
    public InPlayerEpisodePreviewPlugin(
        IApplicationPaths applicationPaths,
        IXmlSerializer xmlSerializer,
        ILogger<InPlayerEpisodePreviewPlugin> logger,
        IServerConfigurationManager configurationManager)
        : base(applicationPaths, xmlSerializer)
    {
        Instance = this;
        
        ServerConfigurationManager = configurationManager;
        ViewableApplicationPaths = applicationPaths;
        Logger = logger;
    }

    /// <inheritdoc />
    public IEnumerable<PluginPageInfo> GetPages()
    {
        yield return new PluginPageInfo
        {
            Name = "InPlayerEpisodePreview",
            EmbeddedResourcePath = GetType().Namespace + ".Configuration.config.html"
        };
    }
}