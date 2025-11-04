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

    public List<int> EnabledItemTypes { get; set; } = [
        (int)AvailablePreviewItemTypes.Series,
        (int)AvailablePreviewItemTypes.Movie,
        (int)AvailablePreviewItemTypes.Video,
        (int)AvailablePreviewItemTypes.BoxSet,
        (int)AvailablePreviewItemTypes.Folder
    ];

    public bool BlurDescription { get; set; } = false;
    public bool BlurThumbnail { get; set; } = false;
}
