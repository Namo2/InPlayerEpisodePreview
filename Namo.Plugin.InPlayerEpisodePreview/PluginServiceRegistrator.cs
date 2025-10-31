using Namo.Plugin.InPlayerEpisodePreview.Services;

namespace Namo.Plugin.InPlayerEpisodePreview;
using MediaBrowser.Controller.Plugins;
using Microsoft.Extensions.DependencyInjection;
using MediaBrowser.Controller;

public class PluginServiceRegistrator : IPluginServiceRegistrator
{
    public void RegisterServices(IServiceCollection serviceCollection, IServerApplicationHost applicationHost)
    {
        serviceCollection.AddSingleton<StartupService>();
    }
}