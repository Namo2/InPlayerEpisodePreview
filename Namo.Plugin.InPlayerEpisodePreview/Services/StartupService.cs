using System.Reflection;
using System.Runtime.Loader;
using MediaBrowser.Model.Tasks;
using Microsoft.Extensions.Logging;
using Namo.Plugin.InPlayerEpisodePreview.Helpers;
using Newtonsoft.Json.Linq;

namespace Namo.Plugin.InPlayerEpisodePreview.Services;

public class StartupService(ILogger<InPlayerEpisodePreviewPlugin> logger) : IScheduledTask
{
    public string Name => "InPlayerEpisodePreview Startup";

    public string Key => "Namo.Plugin.InPlayerEpisodePreview.Startup";
        
    public string Description => "Startup Service for InPlayerEpisodePreview";
        
    public string Category => "Startup Services";
        
    public Task ExecuteAsync(IProgress<double> progress, CancellationToken cancellationToken)
    {
        List<JObject> payloads =
        [
            new()
            {
                { "id", "73833d5f-0bcb-45dc-ab8b-7ce668f4345d" },
                { "fileNamePattern", "index.html" },
                { "callbackAssembly", GetType().Assembly.FullName },
                { "callbackClass", typeof(IndexHtmlInjector).FullName },
                { "callbackMethod", nameof(IndexHtmlInjector.FileTransformer) }
            }
        ];

        Assembly? fileTransformationAssembly =
            AssemblyLoadContext.All.SelectMany(x => x.Assemblies).FirstOrDefault(x =>
                x.FullName?.Contains(".FileTransformation") ?? false);
        if (fileTransformationAssembly == null)
        {
            logger.LogInformation("Error using FileTransformation plugin. PluginAssembly is null. Fallback to direct injection.");
            IndexHtmlInjector.Direct();
            return Task.CompletedTask;
        }
    
        Type? pluginInterfaceType = fileTransformationAssembly.GetType("Jellyfin.Plugin.FileTransformation.PluginInterface");
        if (pluginInterfaceType == null)
        {
            logger.LogInformation("Error using FileTransformation plugin. PluginInterfaceType is null. Fallback to direct injection.");
            IndexHtmlInjector.Direct();
            return Task.CompletedTask;
        }
       
        logger.LogInformation("Register InPlayerEpisodePreview for FileTransformation plugin.");
        foreach (JObject payload in payloads)
        {
            pluginInterfaceType.GetMethod("RegisterTransformation")?.Invoke(null, [payload]);
        }

        return Task.CompletedTask;
    }

    public IEnumerable<TaskTriggerInfo> GetDefaultTriggers()
    {
        yield return new TaskTriggerInfo()
        {
            Type = TaskTriggerInfoType.StartupTrigger
        };
    }
}