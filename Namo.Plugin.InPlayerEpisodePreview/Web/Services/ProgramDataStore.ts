import {ProgramData} from "../Models/ProgramData";
import {Group} from "../Models/PreviewData/Group";
import {PreviewItem} from "../Models/PreviewData/PreviewItem";
import {ItemType} from "../Models/ItemType";
import {DefaultPluginSettings, PluginSettings} from "../Models/PluginSettings";
import {DefaultServerSettings, ServerSettings} from "../Models/ServerSettings";

export class ProgramDataStore {
    private _programData: ProgramData

    constructor() {
        this._programData = {
            activeMediaSourceId: '',
            activeGroupId: '',
            boxSetName: '',
            type: undefined,
            groups: [],
            pluginSettings: DefaultPluginSettings,
            serverSettings: DefaultServerSettings
        }
    }

    public get activeMediaSourceId(): string {
        return this._programData.activeMediaSourceId
    }

    public set activeMediaSourceId(activeMediaSourceId: string) {
        this._programData.activeMediaSourceId = activeMediaSourceId
    }

    public get activeGroupId(): string {
        return this._programData.activeGroupId
    }

    public set activeGroupId(activeGroupId: string) {
        this._programData.activeGroupId = activeGroupId
    }

    public get activeGroup(): Group {
        return this.groups.find(group => group.groupId === this.activeGroupId)
    }

    public get type(): ItemType {
        return this._programData.type
    }

    public set type(type: ItemType) {
        this._programData.type = type
    }

    public get boxSetName(): string {
        return this._programData.boxSetName
    }

    public set boxSetName(boxSetName: string) {
        this._programData.boxSetName = boxSetName
    }

    public get groups(): Group[] {
        return this._programData.groups
    }

    public set groups(groups: Group[]) {
        this._programData.groups = groups
    }

    public get pluginSettings(): PluginSettings {
        return this._programData.pluginSettings
    }

    public set pluginSettings(settings: PluginSettings) {
        this._programData.pluginSettings = settings
    }

    public get serverSettings(): ServerSettings {
        return this._programData.serverSettings
    }

    public set serverSettings(settings: ServerSettings) {
        this._programData.serverSettings = settings
    }

    public get dataIsAllowedForPreview() {
        if (!this.allowedPreviewTypes.includes(this.type))
            return false

        return this.groups.some(group => group.items.length >= 1)
    }

    public get allowedPreviewTypes() {
        return this.pluginSettings.EnabledItemTypes
    }

    public getItemById(itemId: string): PreviewItem {
        return this.groups
            .flatMap(group => group.items)
            .find(item => item.Id === itemId)
    }

    public updateGroupItems(groupId: string, items: PreviewItem[]): void {
        this._programData.groups = this._programData.groups.map(group =>
            group.groupId === groupId ? { ...group, items } : group
        )
    }

    public updateItem(itemToUpdate: PreviewItem): void {
        this.groups = this.groups.map(group =>
            group.items.some(item => item.Id === itemToUpdate.Id)
                ? { ...group, items: [...group.items.filter(item => item.Id !== itemToUpdate.Id), itemToUpdate] }
                : group
        )
    }
}
