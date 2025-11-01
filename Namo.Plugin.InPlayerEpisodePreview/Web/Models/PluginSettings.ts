import {ItemType} from "./ItemType";

export type PluginSettings = {
    EnabledItemTypes: ItemType[]
}

export const DefaultPluginSettings: PluginSettings = {
    EnabledItemTypes: [ItemType.Series, ItemType.BoxSet, ItemType.Movie, ItemType.Folder, ItemType.Video]
}