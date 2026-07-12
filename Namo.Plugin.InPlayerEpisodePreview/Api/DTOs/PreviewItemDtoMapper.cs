using MediaBrowser.Model.Dto;
using MediaBrowser.Model.Entities;

namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

/// <summary>
/// Maps Jellyfin's BaseItemDto down to the fields the frontend actually uses.
/// </summary>
public static class PreviewItemDtoMapper
{
    public static PreviewItemDto ToPreviewItemDto(this BaseItemDto dto)
    {
        string? primaryImageTag = dto.ImageTags?.GetValueOrDefault(ImageType.Primary);

        var userData = new PreviewItemUserDataDto(
            dto.UserData?.PlayedPercentage,
            dto.UserData?.PlaybackPositionTicks ?? 0,
            dto.UserData?.IsFavorite ?? false,
            dto.UserData?.Played ?? false);

        return new PreviewItemDto(
            dto.Id,
            dto.Name,
            dto.ServerId,
            dto.IndexNumber,
            dto.RunTimeTicks,
            dto.PremiereDate,
            dto.CommunityRating,
            dto.CriticRating,
            dto.Overview,
            primaryImageTag,
            userData);
    }
}
