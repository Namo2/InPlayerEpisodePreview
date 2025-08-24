using System.Reflection;
using System.Text.RegularExpressions;
using MediaBrowser.Common.Net;
using Microsoft.Extensions.Logging;
using Namo.Plugin.InPlayerEpisodePreview.Models;

namespace Namo.Plugin.InPlayerEpisodePreview.Helpers;

public static class IndexHtmlInjector
{
    private static readonly ILogger<InPlayerEpisodePreviewPlugin> Logger = InPlayerEpisodePreviewPlugin.Instance.Logger;
    private const string ScriptTagRegex = "<script plugin=\"InPlayerEpisodePreview\".*?></script>";

    public static string FileTransformer(PatchRequestPayload payload)
    {
        Logger.LogInformation("Attempting to inject script by using FileTransformation plugin.");
        
        string scriptElement = GetScriptElement();
        string indexContents = payload.Contents!;
        
        // Replace old script tag
        indexContents = Regex.Replace(indexContents, ScriptTagRegex, "");
        // Inject new script tag
        string regex = Regex.Replace(indexContents, "(</body>)", $"{scriptElement}$1");
        
        return regex;
    }

    public static void Direct()
    {
        Logger.LogInformation("Attempting to inject script by changing file directly.");

        var applicationPaths = InPlayerEpisodePreviewPlugin.Instance.ViewableApplicationPaths;

        if (string.IsNullOrWhiteSpace(applicationPaths.WebPath))
            return;

        var indexFile = Path.Combine(applicationPaths.WebPath, "index.html");
        if (!File.Exists(indexFile))
            return;

        string indexContents = File.ReadAllText(indexFile);
        string scriptElement = GetScriptElement();

        if (indexContents.Contains(scriptElement))
        {
            Logger.LogInformation("Found client script injected in {0}", indexFile);
            return;
        }

        Logger.LogInformation("Attempting to inject preview script code in {0}", indexFile);

        // Replace old script
        indexContents = Regex.Replace(indexContents, ScriptTagRegex, "");

        // Insert script last in body
        int bodyClosing = indexContents.LastIndexOf("</body>", StringComparison.Ordinal);
        if (bodyClosing == -1)
        {
            Logger.LogInformation("Could not find closing body tag in {0}", indexFile);
            return;
        }
        
        indexContents = indexContents.Insert(bodyClosing, scriptElement);
        try
        {
            File.WriteAllText(indexFile, indexContents);
            Logger.LogInformation("Finished injecting preview script code in {0}", indexFile);
        }
        catch (Exception e)
        {
            Logger.LogError("Encountered exception while writing to {0}: {1}", indexFile, e);
        }
    }

    private static string GetScriptElement()
    {
        NetworkConfiguration networkConfiguration =
            InPlayerEpisodePreviewPlugin.Instance.ServerConfigurationManager.GetNetworkConfiguration();

        string basePath = "";

        // Get base path from network config
        try
        {
            var configType = networkConfiguration.GetType();
            var basePathField = configType.GetProperty("BaseUrl");
            var confBasePath = basePathField?.GetValue(networkConfiguration)?.ToString()?.Trim('/');

            if (!string.IsNullOrEmpty(confBasePath))
                basePath = $"/{confBasePath}";
        }
        catch (Exception e)
        {
            Logger.LogError("Unable to get base path from config, using '/': {0}", e);
        }

        string versionTag = Assembly.GetExecutingAssembly().GetName().Version?.ToString() ?? "1.0.0.0";
        
        return
            $"<script plugin=\"InPlayerEpisodePreview\" version=\"{versionTag}\" src=\"{basePath}/InPlayerPreview/ClientScript\"></script>";
    }
}