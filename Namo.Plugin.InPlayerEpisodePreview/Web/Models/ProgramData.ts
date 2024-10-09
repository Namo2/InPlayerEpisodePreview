import {Season} from "./Season";
import {BaseItem} from "./Episode";
import {ItemType} from "./ItemType";

export type ProgramData = {
    userId: string;
    activeMediaSourceId: string;
    activeSeasonIndex: number;
    type: ItemType;
    boxSetName: string;
    movies?: BaseItem[];
    seasons?: Season[];
}