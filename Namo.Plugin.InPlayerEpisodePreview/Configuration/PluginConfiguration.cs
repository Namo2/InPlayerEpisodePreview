using MediaBrowser.Model.Plugins;

namespace Namo.Plugin.InPlayerEpisodePreview.Configuration;

/// <summary>
/// Class PluginConfiguration
/// </summary>
public class PluginConfiguration : BasePluginConfiguration
{
    /// <summary>
    /// Initializes a new instance of the <see cref="PluginConfiguration"/> class.
    /// </summary>
    public PluginConfiguration() {}

    /// <summary>
    /// Whether or not the plugin should inject the client-side script tag into jellyfin-web.
    /// default = true
    /// </summary>
    public bool InjectClientScript { get; set; } = true;
}
