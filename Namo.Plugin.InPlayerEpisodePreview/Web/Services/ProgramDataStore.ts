import {ProgramData} from "../Models/ProgramData";
import {Season} from "../Models/Season";
import {BaseItem} from "../Models/Episode";
import {ItemType} from "../Models/ItemType";

export class ProgramDataStore {
    private _programData: ProgramData

    constructor() {
        this.clear()
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

    public get activeSeasonIndex(): number {
        return this.seasons.find(season => season.episodes.some(episode => episode.Id === this.activeMediaSourceId)).IndexNumber ?? 0
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
        if (this.boxSetName !== '')
            return this._programData.movies
        
        // Only show the current running movie. Will be adjusted later when ItemType.Folder or similar is introduced
        return this._programData.movies.filter(movie => movie.Id === this.activeMediaSourceId)
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

    public get isSeries(): boolean {
        return this.type === ItemType.Series
    }
    
    public get isMovie(): boolean {
        return this.type === ItemType.Movie
    }
    
    public get dataIsAllowedForPreview() {
        if (!this.allowedPreviewTypes.includes(this.type))
            return false
        
        switch (this.type) {
            case ItemType.Series:
                return this.seasons.at(this.activeSeasonIndex)?.episodes.length >= this.minimumElementsNeeded
            case ItemType.Movie:
                return this.movies.length >= this.minimumElementsNeeded
            default:
                return false
        }
    }
    
    public get allowedPreviewTypes() { 
        // TODO: get from plugin config in the future
        return [ItemType.Series, ItemType.Movie]
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
            case ItemType.Movie:
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
            case ItemType.Movie:
                this.movies = [... this.movies.filter(movie => movie.Id !== itemToUpdate.Id), itemToUpdate]
        }
    }

    public clear(): void {
        this._programData = {
            userId: '',
            activeMediaSourceId: '',
            activeSeasonIndex: 0,
            boxSetName: '',
            type: undefined,
            movies: [],
            seasons: []
        };
    }
}