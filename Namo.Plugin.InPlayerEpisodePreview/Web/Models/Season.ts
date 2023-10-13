import {Episode} from "./Episode";

export interface Season {
    seasonId: string;
    seasonName: string;
    episodes: Episode[];
}