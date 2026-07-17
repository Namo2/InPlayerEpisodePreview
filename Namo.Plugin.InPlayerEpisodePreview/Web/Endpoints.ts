export enum Endpoints {
    BASE = "InPlayerPreview",
    ITEM_DESCRIPTION = "/Items/{itemId}",
    PLAY_MEDIA = "/Items/{itemId}/Play/{ticks}",
    NOW_PLAYING_ITEM = "/NowPlayingItem",
    SERVER_SETTINGS = "/ServerSettings",
    ITEM_PREVIEW_DATA = "/Users/{userId}/{deviceId}/Items/{itemId}/PreviewData",
    GROUP_ITEMS = "/Users/{userId}/Groups/{groupId}/Items",
    SET_SOURCE_COLLECTION = "/Users/{userId}/{deviceId}/SourceCollection/{collectionId}"
}