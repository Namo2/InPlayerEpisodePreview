using System.Security.Cryptography;

namespace Namo.Plugin.InPlayerEpisodePreview.Helpers;

/// <summary>
/// Access to the embedded client script and its content hash.
/// </summary>
public static class ClientScript
{
    public static readonly string ResourcePath = $"{typeof(InPlayerEpisodePreviewPlugin).Namespace}.Web.InPlayerPreview.js";

    private static readonly Lazy<string?> LazyHash = new(ComputeHash);

    /// <summary>
    /// Short content hash of the embedded script. Null when the resource is missing.
    /// </summary>
    public static string? Hash => LazyHash.Value;

    public static Stream? Open() => typeof(ClientScript).Assembly.GetManifestResourceStream(ResourcePath);

    private static string? ComputeHash()
    {
        using Stream? stream = Open();
        if (stream == null)
            return null;

        return Convert.ToHexString(SHA256.HashData(stream))[..16].ToLowerInvariant();
    }
}
