using System.Reflection;
using System.Runtime.Loader;
using MediaBrowser.Model.Tasks;
using Microsoft.Extensions.Logging;
using Namo.Plugin.InPlayerEpisodePreview.Helpers;
using Newtonsoft.Json.Linq;

namespace Namo.Plugin.InPlayerEpisodePreview.Services
{
    public class StartupService(ILogger<InPlayerEpisodePreviewPlugin> logger) : IScheduledTask
    {
        public string Name => "PluginPages Startup";

        public string Key => "Jellyfin.Plugin.PluginPages.Startup";
        
        public string Description => "Startup Service for InPlayerEpisodePreview";
        
        public string Category => "Startup Services";
        
        public async Task ExecuteAsync(IProgress<double> progress, CancellationToken cancellationToken)
        {
            List<JObject> payloads = [];

            {
                JObject payload = new JObject();
                payload.Add("id", "73833d5f-0bcb-45dc-ab8b-7ce668f4345d");
                payload.Add("fileNamePattern", "index.html");
                payload.Add("callbackAssembly", GetType().Assembly.FullName);
                payload.Add("callbackClass", typeof(IndexHtmlInjector).FullName);
                payload.Add("callbackMethod", nameof(IndexHtmlInjector.FileTransformer));
                payloads.Add(payload);
            }
            
            Assembly? fileTransformationAssembly =
                AssemblyLoadContext.All.SelectMany(x => x.Assemblies).FirstOrDefault(x =>
                    x.FullName?.Contains(".FileTransformation") ?? false);
            if (fileTransformationAssembly == null)
            {
                logger.LogInformation("Error using FileTransformation plugin. PluginAssembly is null. Fallback to direct injection.");
                IndexHtmlInjector.Direct();
                return;
            }
    
            Type? pluginInterfaceType = fileTransformationAssembly.GetType("Jellyfin.Plugin.FileTransformation.PluginInterface");
            if (pluginInterfaceType == null)
            {
                logger.LogInformation("Error using FileTransformation plugin. PluginInterfaceType is null. Fallback to direct injection.");
                IndexHtmlInjector.Direct();
                return;
            }
       
            foreach (JObject payload in payloads)
            {
                pluginInterfaceType.GetMethod("RegisterTransformation")?.Invoke(null, [payload]);
            }
        }

        public IEnumerable<TaskTriggerInfo> GetDefaultTriggers()
        {
            yield return new TaskTriggerInfo()
            {
                Type = TaskTriggerInfo.TriggerStartup
            };
        }
    }
}