using MediaBrowser.Model.Tasks;

namespace Namo.Plugin.InPlayerEpisodePreview.JellyfinVersionSpecific;

public static class StartupServiceHelper
{
    public static IEnumerable<TaskTriggerInfo> GetDefaultTriggers()
    {
        yield return new TaskTriggerInfo()
        {
            Type = TaskTriggerInfo.TriggerStartup
        };
    }
}