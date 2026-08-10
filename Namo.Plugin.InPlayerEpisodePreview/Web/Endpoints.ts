export enum Endpoints {
    BASE = "InPlayerPreview",
    ITEM_DESCRIPTION = "/Items/{itemId}",
    PLAY_MEDIA = "/Items/{itemId}/Play/{ticks}",
    NOW_PLAYING_ITEM = "/NowPlayingItem",
    SERVER_SETTINGS = "/ServerSettings",
    ITEM_PREVIEW_DATA = "/Users/{userId}/{deviceId}/Items/{itemId}/PreviewData",
    GROUP_ITEMS = "/Users/{userId}/Groups/{groupId}/Items",
    GROUP_WATCHED_COUNT = "/Users/{userId}/Groups/{groupId}/WatchedCount",
    CONTAINING_COLLECTIONS = "/Users/{userId}/Items/{itemId}/ContainingCollections",
    SET_SOURCE_COLLECTION = "/Users/{userId}/{deviceId}/SourceCollection/{collectionId}",
    PLUGIN_SETTINGS = "/PluginSettings"
}