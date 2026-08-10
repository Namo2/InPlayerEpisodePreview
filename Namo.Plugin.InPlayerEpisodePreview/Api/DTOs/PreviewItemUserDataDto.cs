namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public record PreviewItemUserDataDto(
    double? PlayedPercentage,
    long PlaybackPositionTicks,
    bool IsFavorite,
    bool Played);
