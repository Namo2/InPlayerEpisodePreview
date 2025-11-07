namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public record Season(Guid Id, int IndexNumber, string Name, Episode[] Episodes);