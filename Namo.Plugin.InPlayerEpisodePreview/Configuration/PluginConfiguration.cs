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
    /// Whether the description/thumbnail blur only applies to items the user hasn't watched yet.
    /// </summary>
    public bool OnlyBlurUnwatched { get; set; } = false;

    /// <summary>
    /// Whether to show "played/total watched" counts on groups.
    /// </summary>
    public bool ShowWatchedCount { get; set; } = true;

    /// <summary>
    /// Which format the watched-count badge is displayed in.
    /// </summary>
    public int WatchCountDisplayMode { get; set; } = (int)Namo.Plugin.InPlayerEpisodePreview.Configuration.WatchCountDisplayMode.HoursMinutes;

    /// <summary>
    /// Whether to search for other Collections/Playlists containing the item being played
    /// </summary>
    public bool SearchContainingCollections { get; set; } = true;

    /// <summary>
    /// Whether to show Virtual (missing/unaired) items
    /// </summary>
    public bool DisplayMissingEpisodes { get; set; } = false;
}
