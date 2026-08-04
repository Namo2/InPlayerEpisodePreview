namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public record WatchedCountResult(int PlayedItemCount, int TotalItemCount, long PlayedRuntimeTicks = 0, long TotalRuntimeTicks = 0);
