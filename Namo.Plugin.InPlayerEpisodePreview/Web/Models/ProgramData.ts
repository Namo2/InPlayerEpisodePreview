import {Group} from "./PreviewData/Group";
import {ItemType} from "./ItemType";
import {PluginSettings} from "./PluginSettings";
import {ServerSettings} from "./ServerSettings";

export type ProgramData = {
    activeMediaSourceId: string
    activeGroupId: string
    type: ItemType
    boxSetName: string
    groups: Group[]
    pluginSettings: PluginSettings,
    serverSettings: ServerSettings
}
