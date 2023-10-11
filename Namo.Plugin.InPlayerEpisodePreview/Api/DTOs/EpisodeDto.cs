namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public class EpisodeDto
{
    public string Name { get; set; } = string.Empty;
    public int IndexNumber { get; set; }

    public EpisodeDto() { }

    public EpisodeDto(string name)
    {
        Name = name;
    }

    public EpisodeDto(string name, int? index) : this(name)
    {
        if (index.HasValue)
            IndexNumber = index.Value;
    }
}
