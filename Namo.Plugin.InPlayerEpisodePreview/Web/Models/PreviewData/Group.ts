import {PreviewItem} from "./PreviewItem";

export type Group = {
    groupId: string
    groupName: string
    items: PreviewItem[]
    indexNumber: number
    playedItemCount: number
    totalItemCount: number
    loadedStartIndex?: number
    loadedEndIndex?: number
}

export const formatWatchedCount = (playedItemCount: number, totalItemCount: number): string => 
    `${playedItemCount}/${totalItemCount} watched`

