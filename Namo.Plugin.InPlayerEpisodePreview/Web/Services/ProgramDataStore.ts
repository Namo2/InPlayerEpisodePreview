import {ProgramData} from "../Models/ProgramData";
import {Season} from "../Models/Season";

export class ProgramDataStore {
    private _programData: ProgramData;
    
    constructor() {
        // init the _programData field with empty values
        this.clear();
    }
    
    public getUserId(): string {
        return this._programData.userId;
    }
    
    public getActiveMediaSourceId(): string {
        return this._programData.activeMediaSourceId;
    }
    
    public getActiveSeasonIndex(): number {
        return this._programData.activeSeasonIndex;
    }
    
    public getSeasons(): Season[] {
        return this._programData.seasons;
    }
    
    public setUserId(userId: string): void {
        this._programData.userId = userId;
    }
    
    public setActiveMediaSourceId(activeMediaSourceId: string): void {
        this._programData.activeMediaSourceId = activeMediaSourceId;
    }
    
    public setActiveSeasonIndex(activeSeasonIndex: number): void {
        this._programData.activeSeasonIndex = activeSeasonIndex;
    }
    
    public setSeasons(seasons: Season[]): void {
        this._programData.seasons = seasons;
    }

    public clear() {
        this._programData = {
            userId: '',
            activeMediaSourceId: '',
            activeSeasonIndex: 0,
            seasons: [],
        };
    }
}