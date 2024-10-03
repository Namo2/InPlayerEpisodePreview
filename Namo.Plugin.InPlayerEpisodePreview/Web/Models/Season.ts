import {BaseItem} from "./Episode";

export interface Season {
    seasonId: string;
    seasonName: string;
    episodes: BaseItem[];
}