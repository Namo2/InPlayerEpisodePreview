namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public record Series(Guid Id, int Index, string Name, Season[] Seasons);