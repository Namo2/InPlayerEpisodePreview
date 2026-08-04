namespace Namo.Plugin.InPlayerEpisodePreview.Services;

/// <summary>
/// Aggregated played-item counts and runtime ticks for a set of items.
/// </summary>
public record WatchStats(int PlayedItemCount, int TotalItemCount, long PlayedRuntimeTicks, long TotalRuntimeTicks);
