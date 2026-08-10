using Jellyfin.Data.Enums;

namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public record ItemPreviewDataResult(
    BaseItemKind ItemType,
    string? ContainerName,
    List<PreviewGroup> Groups,
    Guid ActiveGroupId,
    int ActiveItemIndex);
