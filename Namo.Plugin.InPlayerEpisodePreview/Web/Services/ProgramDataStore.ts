import {ProgramData} from "../Models/ProgramData";
import {Group} from "../Models/PreviewData/Group";
import {PreviewItem} from "../Models/PreviewData/PreviewItem";
import {ItemType} from "../Models/ItemType";
import {DefaultPluginSettings, PluginSettings} from "../Models/PluginSettings";
import {DefaultServerSettings, ServerSettings} from "../Models/ServerSettings";

const GROUPS_CACHE_TTL = 5 * 60 * 1000

export class ProgramDataStore {
    private _programData: ProgramData
    private _viewToken: number = 0
    private _groupsCachedAt: number | null = null

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
    
    public markGroupsFetched(): void {
        this._groupsCachedAt = Date.now()
    }

    public get isGroupsCacheExpired(): boolean {
        return this._groupsCachedAt === null || Date.now() - this._groupsCachedAt > GROUPS_CACHE_TTL
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
    
    public recordLoadedItems(groupId: string, items: PreviewItem[], startIndex: number): void {
        this._programData.groups = this._programData.groups.map(group => {
            if (group.groupId !== groupId)
                return group

            if (group.loadedStartIndex === undefined || group.loadedEndIndex === undefined) {
                return { ...group, items, loadedStartIndex: startIndex, loadedEndIndex: startIndex + items.length }
            }

            if (startIndex >= group.loadedEndIndex) {
                return { ...group, items: [...group.items, ...items], loadedEndIndex: startIndex + items.length }
            }

            if (startIndex < group.loadedStartIndex) {
                return { ...group, items: [...items, ...group.items], loadedStartIndex: startIndex }
            }
            
            return group
        })
    }
    
    public adjustGroupPlayedCount(itemId: string, delta: number): Group | undefined {
        const group = this.groups.find(g => g.items.some(item => item.Id === itemId))
        if (!group) return undefined

        const updatedGroup: Group = { ...group, playedItemCount: group.playedItemCount + delta }
        this.groups = this.groups.map(g => g.groupId === group.groupId ? updatedGroup : g)
        return updatedGroup
    }

    public updateItem(itemToUpdate: PreviewItem): void {
        this.groups = this.groups.map(group =>
            group.items.some(item => item.Id === itemToUpdate.Id)
                ? { ...group, items: group.items.map(item => item.Id === itemToUpdate.Id ? itemToUpdate : item) }
                : group
        )
    }

    // Called whenever the popup switches what it's displaying (opening, selecting a group, going back to the group list)
    public beginNewView(): number {
        return ++this._viewToken
    }

    public isCurrentView(token: number): boolean {
        return token === this._viewToken
    }
}
