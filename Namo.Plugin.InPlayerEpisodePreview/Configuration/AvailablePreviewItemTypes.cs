using Jellyfin.Data.Enums;

namespace Namo.Plugin.InPlayerEpisodePreview.Configuration;

public enum AvailablePreviewItemTypes
{
    Series = BaseItemKind.Series,
    Movie = BaseItemKind.Movie,
    Video = BaseItemKind.Video,
    BoxSet = BaseItemKind.BoxSet,
    Folder = BaseItemKind.Folder
}