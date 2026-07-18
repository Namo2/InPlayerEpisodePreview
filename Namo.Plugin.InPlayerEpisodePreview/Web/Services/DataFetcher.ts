import {ProgramDataStore} from "./ProgramDataStore";
import {PreviewItem} from "../Models/PreviewData/PreviewItem";
import {formatWatchedCount, Group} from "../Models/PreviewData/Group";

type UserDataChangedEntry = {
    ItemId: string
    Played: boolean
    IsFavorite: boolean
    PlaybackPositionTicks: number
    PlayedPercentage?: number
}

type WebSocketMessage = {
    MessageType: string
    Data: any
}

function updateWatchedCountDom(programDataStore: ProgramDataStore, group: Group): void {
    const text = formatWatchedCount(group.playedItemCount, group.totalItemCount)

    if (group.groupId === programDataStore.activeGroupId) {
        const popupWatchedCount = document.getElementById('popupTitleContainer')?.querySelector<HTMLElement>('.previewGroupWatchedCount')
        if (popupWatchedCount) popupWatchedCount.innerText = text
    }

    const groupListWatchedCount = document.getElementById(`group-${group.groupId}`)?.querySelector<HTMLElement>('.previewGroupWatchedCount')
    if (groupListWatchedCount) groupListWatchedCount.innerText = text
}

function adjustWatchedCount(programDataStore: ProgramDataStore, itemId: string, wasPlayed: boolean, isPlayed: boolean): void {
    if (!programDataStore.pluginSettings.ShowWatchedCount) return
    if (wasPlayed === isPlayed) return

    const updatedGroup = programDataStore.adjustGroupPlayedCount(itemId, isPlayed ? 1 : -1)
    if (updatedGroup) updateWatchedCountDom(programDataStore, updatedGroup)
}

export function togglePlayedStateLocally(programDataStore: ProgramDataStore, itemId: string): void {
    const item: PreviewItem = programDataStore.getItemById(itemId)
    if (!item) return

    const wasPlayed = item.UserData.Played
    const isPlayed = !wasPlayed

    programDataStore.updateItem({
        ...item,
        UserData: { ...item.UserData, Played: isPlayed }
    })
    adjustWatchedCount(programDataStore, itemId, wasPlayed, isPlayed)
}

export class DataFetcher {
    constructor(private programDataStore: ProgramDataStore) {
        Events.on(ApiClient, 'message', (_event, message: WebSocketMessage): void => {
            if (message.MessageType !== 'UserDataChanged') return
            if (message.Data.UserId !== ApiClient.getCurrentUserId()) return

            const userDataList: UserDataChangedEntry[] = message.Data.UserDataList ?? []
            for (const userData of userDataList) {
                const item: PreviewItem = this.programDataStore.getItemById(userData.ItemId)
                if (!item) continue

                const wasPlayed = item.UserData.Played
                this.programDataStore.updateItem({
                    ...item,
                    UserData: {
                        ...item.UserData,
                        Played: userData.Played,
                        IsFavorite: userData.IsFavorite,
                        PlaybackPositionTicks: userData.PlaybackPositionTicks,
                        PlayedPercentage: userData.PlayedPercentage
                    }
                })

                adjustWatchedCount(this.programDataStore, userData.ItemId, wasPlayed, userData.Played)
            }
        })
    }
}
