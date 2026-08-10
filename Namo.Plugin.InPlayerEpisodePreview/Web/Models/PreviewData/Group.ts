import {PreviewItem} from "./PreviewItem";

export type Group = {
    groupId: string
    groupName: string
    items: PreviewItem[]
    indexNumber: number
    playedItemCount: number
    totalItemCount: number
    playedRuntimeTicks: number
    totalRuntimeTicks: number
    loadedStartIndex?: number
    loadedEndIndex?: number
    loadedTotalRecordCount?: number
}

export const UNKNOWN_WATCHED_COUNT = -1

export const formatWatchedCount = (playedItemCount: number, totalItemCount: number): string =>
    playedItemCount === UNKNOWN_WATCHED_COUNT || totalItemCount === UNKNOWN_WATCHED_COUNT
        ? '… watched'
        : `${playedItemCount}/${totalItemCount} watched`

