namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public record PreviewGroup(
    Guid GroupId,
    string? GroupName,
    int IndexNumber,
    int PlayedItemCount,
    int TotalItemCount,
    long PlayedRuntimeTicks = 0,
    long TotalRuntimeTicks = 0);
