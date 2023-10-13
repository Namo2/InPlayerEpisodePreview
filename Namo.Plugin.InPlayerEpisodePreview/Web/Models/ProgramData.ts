import {Season} from "./Season";

export interface ProgramData {
    userId: string;
    activeMediaSourceId: string;
    activeSeasonIndex: number;
    seasons: Season[];
}