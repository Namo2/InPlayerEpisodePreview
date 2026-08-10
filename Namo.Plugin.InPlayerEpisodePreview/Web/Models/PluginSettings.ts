import {ItemType} from "./ItemType";
import {WatchCountDisplayMode} from "./WatchCountDisplayMode";

export type PluginSettings = {
    EnabledItemTypes: ItemType[],
    BlurDescription: boolean,
    BlurThumbnail: boolean,
    EpisodePageSize: number,
    ShowWatchedCount: boolean,
    WatchCountDisplayMode: WatchCountDisplayMode,
    SearchContainingCollections: boolean,
    OnlyBlurUnwatched: boolean,
}

export const DefaultPluginSettings: PluginSettings = {
    EnabledItemTypes: [ItemType.Series, ItemType.BoxSet, ItemType.Movie, ItemType.Video],
    BlurDescription: false,
    BlurThumbnail: false,
    EpisodePageSize: 10,
    ShowWatchedCount: true,
    WatchCountDisplayMode: WatchCountDisplayMode.HoursMinutes,
    SearchContainingCollections: true,
    OnlyBlurUnwatched: false,
}