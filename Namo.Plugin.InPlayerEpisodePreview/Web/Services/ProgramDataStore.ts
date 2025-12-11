import {ProgramData} from "../Models/ProgramData";
import {Season} from "../Models/Season";
import {BaseItem} from "../Models/Episode";
import {ItemType} from "../Models/ItemType";
import {DefaultPluginSettings, PluginSettings} from "../Models/PluginSettings";
import {DefaultServerSettings, ServerSettings} from "../Models/ServerSettings";

export class ProgramDataStore {
    private _programData: ProgramData

    constructor() {
        this._programData = {
            activeMediaSourceId: '',
            boxSetName: '',
            type: undefined,
            movies: [],
            seasons: [],
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

    public get activeSeason(): Season {
        return this.seasons.find(season => season.episodes.some(episode => episode.Id === this.activeMediaSourceId))
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
    
    public get movies(): BaseItem[] {
        return this._programData.movies
    }
    
    public set movies(movies: BaseItem[]) {
        this._programData.movies = movies
        this._programData.seasons = []
    }

    public get seasons(): Season[] {
        return this._programData.seasons
    }

    public set seasons(seasons: Season[]) {
        this._programData.seasons = seasons
        this._programData.movies = []
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
        
        switch (this.type) {
            case ItemType.Series:
                return this.activeSeason.episodes.length >= 1
            case ItemType.Movie:
                return true
            case ItemType.BoxSet:
            case ItemType.Folder:
            case ItemType.Video:
                return this.movies.length >= 1
            default:
                return false
        }
    }
    
    public get allowedPreviewTypes() {
        return this.pluginSettings.EnabledItemTypes
    }

    public getItemById(itemId: string): BaseItem {
        switch (this.type) {
            case ItemType.Series:
                return this.seasons
                    .flatMap(season => season.episodes)
                    .find(episode => episode.Id === itemId)
            case ItemType.BoxSet:
            case ItemType.Movie:
            case ItemType.Folder:
            case ItemType.Video:
                return this.movies.find(movie => movie.Id === itemId)
            default: 
                return undefined
        }
    }

    public updateItem(itemToUpdate: BaseItem): void {
        switch (this.type) {
            case ItemType.Series: {
                    const season: Season = this.seasons.find(season => season.seasonId === itemToUpdate.SeasonId)
                    this.seasons = [
                        ... this.seasons.filter(season => season.seasonId !== itemToUpdate.SeasonId), {
                            ...season,
                            episodes: [... season.episodes.filter(episode => episode.Id !== itemToUpdate.Id), itemToUpdate]
                        }
                    ]
                }
                break
            case ItemType.BoxSet:
            case ItemType.Movie:
            case ItemType.Folder:
            case ItemType.Video:
                this.movies = [... this.movies.filter(movie => movie.Id !== itemToUpdate.Id), itemToUpdate]
        }
    }
}