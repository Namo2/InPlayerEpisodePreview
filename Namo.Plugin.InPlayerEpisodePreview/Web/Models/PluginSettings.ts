import {ItemType} from "./ItemType";

export type PluginSettings = {
    EnabledItemTypes: ItemType[],
    BlurDescription: boolean,
    BlurThumbnail: boolean,
}

export const DefaultPluginSettings: PluginSettings = {
    EnabledItemTypes: [ItemType.Series, ItemType.BoxSet, ItemType.Movie, ItemType.Folder, ItemType.Video],
    BlurDescription: false,
    BlurThumbnail: false,
}