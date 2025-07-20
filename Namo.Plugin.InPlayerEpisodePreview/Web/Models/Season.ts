import {BaseItem} from "./Episode";

export type Season = {
    seasonId: string;
    seasonName: string;
    episodes: BaseItem[];
}