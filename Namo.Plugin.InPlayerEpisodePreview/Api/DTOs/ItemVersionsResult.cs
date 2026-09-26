namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

/// <param name="ActiveVersionId">Version playing in the current session</param>
/// <param name="HasUserDataPerVersion">Whether played/favorite state of a version is separate from the primary item.</param>
public record ItemVersionsResult(List<ItemVersionDto> Versions, string? ActiveVersionId, bool HasUserDataPerVersion);
