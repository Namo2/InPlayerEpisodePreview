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

    public int[] EnabledItemTypes { get; set; } = [
        (int)AvailablePreviewItemTypes.Series,
        (int)AvailablePreviewItemTypes.Movie,
        (int)AvailablePreviewItemTypes.Video,
        (int)AvailablePreviewItemTypes.BoxSet,
        (int)AvailablePreviewItemTypes.Folder
    ];

    public bool BlurDescription { get; set; } = false;
    public bool BlurThumbnail { get; set; } = false;
    public int EpisodePageSize { get; set; } = 10;

    /// <summary>
    /// Whether to show "played/total watched" counts on groups.
    /// </summary>
    public bool ShowWatchedCount { get; set; } = false;
}
