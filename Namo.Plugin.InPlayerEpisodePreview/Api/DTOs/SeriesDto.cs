namespace Namo.Plugin.InPlayerEpisodePreview.Api.DTOs;

public class SeriesDto
{
    public string Name { get; set; } = string.Empty;
    public int IndexNumber { get; set; }
    public List<SeasonDto> Seasons { get; set; } = new ();

    public SeriesDto() { }

    public SeriesDto(string name)
    {
        Name = name;
    }

    public SeriesDto(string name, int? index) : this(name)
    {
        if (index.HasValue)
            IndexNumber = index.Value;
    }

    public SeriesDto(string name, int? index, List<SeasonDto> seasons) : this(name, index)
    {
        Seasons = seasons;
    }
}
