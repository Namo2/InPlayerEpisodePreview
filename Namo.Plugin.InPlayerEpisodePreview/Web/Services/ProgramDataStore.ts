import {ProgramData} from "../Models/ProgramData";
import {Season} from "../Models/Season";
import {BaseItem} from "../Models/Episode";
import {ItemType} from "../Models/ItemType";

export class ProgramDataStore {
    private _programData: ProgramData;

    constructor() {
        // init the _programData field with empty values
        this.clear();
    }

    public get userId(): string {
        return this._programData.userId;
    }

    public set userId(userId: string) {
        this._programData.userId = userId;
    }

    public get activeMediaSourceId(): string {
        return this._programData.activeMediaSourceId;
    }

    public set activeMediaSourceId(activeMediaSourceId: string) {
        this._programData.activeMediaSourceId = activeMediaSourceId;
    }

    public get activeSeasonIndex(): number {
        return this._programData.activeSeasonIndex;
    }

    public set activeSeasonIndex(activeSeasonIndex: number) {
        this._programData.activeSeasonIndex = activeSeasonIndex;
    }
    
    public get type(): ItemType {
        return this._programData.type;
    }
    
    public set type(type: ItemType) {
        this._programData.type = type;
    }
    
    public get boxSetName(): string {
        return this._programData.boxSetName;
    }
    
    public set boxSetName(boxSetName: string) {
        this._programData.boxSetName = boxSetName;
    }
    
    public get movies(): BaseItem[] {
        return this._programData.movies;
    }
    
    public set movies(movies: BaseItem[]) {
        this._programData.movies = movies;
    }

    public get seasons(): Season[] {
        return this._programData.seasons;
    }

    public set seasons(seasons: Season[]) {
        this._programData.seasons = seasons;
    }
    public get isMovie(): boolean {
        return this.type === ItemType.Movie;
    }
    
    public get isSeries(): boolean {
        return this.type === ItemType.Series;
    }

    public getEpisodeById(episodeId: string): BaseItem {
        const season: Season = this.seasons.find((season: Season) => season.episodes.some((episode: BaseItem) => episode.Id === episodeId))
        return season.episodes.find((episode: BaseItem) => episode.Id === episodeId);
    }

    public updateItem(item: BaseItem): void {
        if (this.isSeries) {
            this.updateEpisode(item)
            return
        }

        const movieIndex: number = this.movies.findIndex((s: BaseItem): boolean => s.Id === item.Id);
        if (movieIndex > -1) {
            this.movies[movieIndex] = item;
        }
    }

    public updateEpisode(episode: BaseItem): void {
        const season: Season = this.seasons.find((s: Season): boolean => s.seasonId === episode.SeasonId);
        if (season) {
            const episodeIndex: number = season.episodes.findIndex((e: BaseItem): boolean => e.Id === episode.Id);
            if (episodeIndex > -1) {
                season.episodes[episodeIndex] = episode;
                this.updateSeason(season);
            }
        }
    }
    
    public updateSeason(season: Season): void {
        const seasonIndex: number = this.seasons.findIndex((s: Season): boolean => s.seasonId === season.seasonId);
        if (seasonIndex > -1) {
            this.seasons[seasonIndex] = season;
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