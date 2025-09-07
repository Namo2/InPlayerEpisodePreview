import {ProgramData} from "../Models/ProgramData";
import {Season} from "../Models/Season";
import {BaseItem} from "../Models/Episode";
import {ItemType} from "../Models/ItemType";

export class ProgramDataStore {
    private _programData: ProgramData

    constructor() {
        this._programData = {
            userId: '',
            activeMediaSourceId: '',
            boxSetName: '',
            type: undefined,
            movies: [],
            seasons: []
        }
    }

    public get userId(): string {
        return this._programData.userId
    }

    public set userId(userId: string) {
        this._programData.userId = userId
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
    }

    public get seasons(): Season[] {
        return this._programData.seasons
    }

    public set seasons(seasons: Season[]) {
        this._programData.seasons = seasons
    }
    
    public get dataIsAllowedForPreview() {
        if (!this.allowedPreviewTypes.includes(this.type))
            return false
        
        switch (this.type) {
            case ItemType.Series:
                return this.activeSeason.episodes.length >= this.minimumElementsNeeded
            case ItemType.Movie:
                return true
            case ItemType.BoxSet:
            case ItemType.Folder:
            case ItemType.Video:
                return this.movies.length >= this.minimumElementsNeeded
            default:
                return false
        }
    }
    
    public get allowedPreviewTypes() { 
        // TODO: get from plugin config in the future
        return [ItemType.Series, ItemType.BoxSet, ItemType.Movie, ItemType.Folder, ItemType.Video]
    }
    
    public get minimumElementsNeeded(): number {
        // TODO: get from plugin config in the future
        return 1
    }

    public getItemById(itemId: string): BaseItem {
        switch (this.type) {
            case ItemType.Series:
                return this.seasons
                    .flatMap(season => season.episodes)
                    .find(episode => episode.Id)
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