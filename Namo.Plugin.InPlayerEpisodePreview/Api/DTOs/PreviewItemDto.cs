namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

/// <summary>
/// Slim projection of Jellyfin's BaseItemDto containing only the fields the frontend actually renders.
/// </summary>
public record PreviewItemDto(
    Guid Id,
    string? Name,
    string? ServerId,
    int? IndexNumber,
    long? RunTimeTicks,
    DateTime? PremiereDate,
    float? CommunityRating,
    float? CriticRating,
    string? Description,
    string? PrimaryImageTag,
    PreviewItemUserDataDto UserData);
