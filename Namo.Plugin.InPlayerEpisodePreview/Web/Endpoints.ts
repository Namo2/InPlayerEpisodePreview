export enum Endpoints {
    BASE = "InPlayerPreview",
    LOAD_SERIES = "/Series/{id}",
    EPISODE_INFO = "/Users/{userId}/Items/{episodeId}",
    EPISODE_DESCRIPTION = "/Items/{episodeId}",
    PLAY_MEDIA = "/Users/{userId}/{deviceId}/Items/{episodeId}/Play/{ticks}"
}