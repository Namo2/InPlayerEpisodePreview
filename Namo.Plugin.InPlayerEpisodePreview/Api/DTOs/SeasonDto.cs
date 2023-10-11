namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public class SeasonDto
{
    public string Name { get; set; } = string.Empty;
    public int IndexNumber { get; set; }
    public List<EpisodeDto> Episodes { get; set; } = new ();

    public SeasonDto() { }

    public SeasonDto(string name)
    {
        Name = name;
    }

    public SeasonDto(string name, int? index) : this(name)
    {
        if (index.HasValue)
            IndexNumber = index.Value;
    }

    public SeasonDto(string name, int? index, List<EpisodeDto> episodes) : this(name, index)
    {
        Episodes = episodes;
    }
}
