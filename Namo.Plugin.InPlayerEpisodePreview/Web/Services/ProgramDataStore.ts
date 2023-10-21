import {ProgramData} from "../Models/ProgramData";
import {Season} from "../Models/Season";

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
    
    public get seasons(): Season[] {
        return this._programData.seasons;
    }

    public set seasons(seasons: Season[]) {
        this._programData.seasons = seasons;
    }
    
    public get isSeries(): boolean {
        return this._programData.isSeries;
    }

    public set isSeries(isSeries: boolean) {
        this._programData.isSeries = isSeries;
    }

    public clear() {
        this._programData = {
            userId: '',
            activeMediaSourceId: '',
            activeSeasonIndex: 0,
            seasons: [],
            isSeries: false
        };
    }
}