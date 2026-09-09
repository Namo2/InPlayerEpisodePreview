import {ItemType} from "./ItemType";
import {WatchCountDisplayMode} from "./WatchCountDisplayMode";
import {LogLevel} from "./LogLevel";
import {ExpandedItemLayout} from "./ExpandedItemLayout";

export type PluginSettings = {
    EnabledItemTypes: ItemType[],
    BlurDescription: boolean,
    BlurThumbnail: boolean,
    EpisodePageSize: number,
    ShowWatchedCount: boolean,
    WatchCountDisplayMode: WatchCountDisplayMode,
    SearchContainingCollections: boolean,
    OnlyBlurUnwatched: boolean,
    ShowWatchProgress: boolean,
    ExpandAllItems: boolean,
    ExpandedItemLayout: ExpandedItemLayout,
    LogLevel: LogLevel,
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
    ShowWatchProgress: true,
    ExpandAllItems: false,
    ExpandedItemLayout: ExpandedItemLayout.Default,
    LogLevel: LogLevel.Information,
}