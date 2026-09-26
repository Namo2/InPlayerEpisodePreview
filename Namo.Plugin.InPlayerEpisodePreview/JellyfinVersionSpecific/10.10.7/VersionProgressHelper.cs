using MediaBrowser.Controller.Entities;

namespace Namo.Plugin.InPlayerEpisodePreview.JellyfinVersionSpecific;

public static class VersionProgressHelper
{
    /// <summary>
    /// Server saves progress of every version on the primary item.
    /// </summary>
    public const bool HasUserDataPerVersion = false;

    /// <summary>
    /// Returns the item that holds the playback progress of <paramref name="version"/>.
    /// </summary>
    public static BaseItem GetProgressItem(BaseItem primary, BaseItem version) => primary;
}
