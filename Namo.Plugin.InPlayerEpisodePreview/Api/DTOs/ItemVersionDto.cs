namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

/// <summary>
/// One alternate version (media source) of an item.
/// </summary>
/// <param name="Id">Media source id</param>
/// <param name="Name">Version label</param>
/// <param name="Item">Metadata of the version</param>
public record ItemVersionDto(
    string Id,
    string? Name,
    PreviewItemDto Item);
