export class Endpoints {
    public static readonly BASE: string = "InPlayerPreview";
    public static readonly EPISODE_INFO: string = "/Users/{userId}/Items/{episodeId}";
    public static readonly EPISODE_DESCRIPTION: string = "/Items/{episodeId}";
    public static readonly PLAY_MEDIA: string = "/Users/{userId}/Items/{episodeId}/Play/{ticks}";
}