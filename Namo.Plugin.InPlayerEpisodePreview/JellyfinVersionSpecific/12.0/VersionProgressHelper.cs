using MediaBrowser.Controller.Entities;

namespace Namo.Plugin.InPlayerEpisodePreview.JellyfinVersionSpecific;

public static class VersionProgressHelper
{
    /// <summary>
    /// Server saves progress on the played version itself (SessionManager.GetProgressItem).
    /// </summary>
    public const bool HasUserDataPerVersion = true;

    /// <summary>
    /// Returns the item that holds the playback progress of <paramref name="version"/>.
    /// </summary>
    public static BaseItem GetProgressItem(BaseItem primary, BaseItem version) => version;
}
