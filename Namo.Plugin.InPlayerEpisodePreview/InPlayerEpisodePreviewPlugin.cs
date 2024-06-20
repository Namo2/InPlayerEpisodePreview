using System.Text.RegularExpressions;
using MediaBrowser.Common.Configuration;
using MediaBrowser.Common.Plugins;
using MediaBrowser.Controller.Configuration;
using MediaBrowser.Controller.Session;
using MediaBrowser.Model.Plugins;
using MediaBrowser.Model.Serialization;
using Microsoft.Extensions.Logging;
using Namo.Plugin.InPlayerEpisodePreview.Configuration;

namespace Namo.Plugin.InPlayerEpisodePreview;

/// <summary>
/// InPlayerEpisodePreview plugin.
/// </summary>
public class InPlayerEpisodePreviewPlugin : BasePlugin<PluginConfiguration>, IHasWebPages
{
    /// <inheritdoc />
    public override string Name => "InPlayerEpisodePreview";

    /// <inheritdoc />
    public override Guid Id => Guid.Parse("73833d5f-0bcb-45dc-ab8b-7ce668f4345d");

    /// <inheritdoc />
    public override string Description => "Adds episode preview functionality to Jellyfin.";

    /// <summary>
    /// Initializes a new instance of the <see cref="InPlayerEpisodePreviewPlugin"/> class.
    /// </summary>
    public InPlayerEpisodePreviewPlugin(
        IApplicationPaths applicationPaths,
        IXmlSerializer xmlSerializer,
        ILogger<InPlayerEpisodePreviewPlugin> logger,
        IServerConfigurationManager configurationManager)
        : base(applicationPaths, xmlSerializer)
    {
        Instance = this;
        
        if (!Configuration.InjectClientScript)
            return;

        if (string.IsNullOrWhiteSpace(applicationPaths.WebPath))
            return;

        var indexFile = Path.Combine(applicationPaths.WebPath, "index.html");
        if (!File.Exists(indexFile))
            return;

        string indexContents = File.ReadAllText(indexFile);
        string basePath = "";

        // Get base path from network config
        try
        {
            var networkConfig = configurationManager.GetConfiguration("network");
            var configType = networkConfig.GetType();
            var basePathField = configType.GetProperty("BaseUrl");
            var confBasePath = basePathField?.GetValue(networkConfig)?.ToString()?.Trim('/');

            if (!string.IsNullOrEmpty(confBasePath))
                basePath = $"/{confBasePath}";
        }
        catch (Exception e)
        {
            logger.LogError("Unable to get base path from config, using '/': {0}", e);
        }

        // Don't run if script already exists
        string scriptReplace = "<script plugin=\"InPlayerEpisodePreview\".*?></script>";
        string scriptElement =
            string.Format(
                "<script plugin=\"InPlayerEpisodePreview\" version=\"1.2.1.0\" src=\"{0}/InPlayerPreview/ClientScript\"></script>",
                basePath);

        if (!indexContents.Contains(scriptElement))
        {
            logger.LogInformation("Attempting to inject preview script code in {0}", indexFile);

            // Replace old Jellyscrub scrips
            indexContents = Regex.Replace(indexContents, scriptReplace, "");

            // Insert script last in body
            int bodyClosing = indexContents.LastIndexOf("</body>", StringComparison.Ordinal);
            if (bodyClosing != -1)
            {
                indexContents = indexContents.Insert(bodyClosing, scriptElement);

                try
                {
                    File.WriteAllText(indexFile, indexContents);
                    logger.LogInformation("Finished injecting preview script code in {0}", indexFile);
                }
                catch (Exception e)
                {
                    logger.LogError("Encountered exception while writing to {0}: {1}", indexFile, e);
                }
            }
            else
            {
                logger.LogInformation("Could not find closing body tag in {0}", indexFile);
            }
        }
        else
        {
            logger.LogInformation("Found client script injected in {0}", indexFile);
        }
    }

    /// <summary>
    /// Gets the current plugin instance.
    /// </summary>
    public static InPlayerEpisodePreviewPlugin? Instance { get; private set; }

    /// <inheritdoc />
    public IEnumerable<PluginPageInfo> GetPages()
    {
        yield return new PluginPageInfo
        {
            Name = "InPlayerEpisodePreview",
            EmbeddedResourcePath = GetType().Namespace + ".Configuration.config.html"
        };
    }
}