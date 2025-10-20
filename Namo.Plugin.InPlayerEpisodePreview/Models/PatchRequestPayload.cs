using System.Text.Json.Serialization;

namespace Namo.Plugin.InPlayerEpisodePreview.Models;

public class PatchRequestPayload
{
    [JsonPropertyName("contents")] 
    public string? Contents { get; set; }
}