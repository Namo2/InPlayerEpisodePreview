import {Episode} from "./Episode";

export type Season = {
    id: string
    name: string
    indexNumber: number
    episodes: Episode[]
}