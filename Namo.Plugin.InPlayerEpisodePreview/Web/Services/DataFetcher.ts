import {ProgramDataStore} from "./ProgramDataStore";
import {PreviewItem} from "../Models/PreviewData/PreviewItem";
import {Group} from "../Models/PreviewData/Group";
import {renderWatchedCountInnerHtml} from "../Models/PreviewData/WatchProgress";

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

export function updateWatchedCountDom(programDataStore: ProgramDataStore, group: Group): void {
    const html = renderWatchedCountInnerHtml(group, programDataStore.pluginSettings.WatchCountDisplayMode)

    if (group.groupId === programDataStore.activeGroupId) {
        const popupWatchedCount = document.getElementById('popupTitleContainer')?.querySelector<HTMLElement>('.previewGroupWatchedCount')
        if (popupWatchedCount) popupWatchedCount.innerHTML = html
    }

    const groupListWatchedCount = document.getElementById(`group-${group.groupId}`)?.querySelector<HTMLElement>('.previewGroupWatchedCount')
    if (groupListWatchedCount) groupListWatchedCount.innerHTML = html
}

function playedRuntimeContribution(item: PreviewItem, played: boolean, playbackPositionTicks: number): number {
    return played ? (item.RunTimeTicks ?? 0) : playbackPositionTicks
}

function adjustWatchedCount(
    programDataStore: ProgramDataStore,
    item: PreviewItem,
    wasPlayed: boolean,
    isPlayed: boolean,
    oldPlaybackPositionTicks: number,
    newPlaybackPositionTicks: number
): void {
    if (!programDataStore.pluginSettings.ShowWatchedCount) return
    if (wasPlayed === isPlayed) return

    const deltaPlayedCount = isPlayed ? 1 : -1
    const deltaPlayedRuntimeTicks =
        playedRuntimeContribution(item, isPlayed, newPlaybackPositionTicks) -
        playedRuntimeContribution(item, wasPlayed, oldPlaybackPositionTicks)

    const updatedGroup = programDataStore.adjustGroupWatchStats(item.Id, deltaPlayedCount, deltaPlayedRuntimeTicks)
    if (updatedGroup) updateWatchedCountDom(programDataStore, updatedGroup)
}

export function togglePlayedStateLocally(programDataStore: ProgramDataStore, itemId: string): void {
    const item: PreviewItem = programDataStore.getItemById(itemId)
    if (!item) return

    const wasPlayed = item.UserData.Played
    const isPlayed = !wasPlayed
    const oldPlaybackPositionTicks = item.UserData.PlaybackPositionTicks
    const newPlaybackPositionTicks = isPlayed ? 0 : oldPlaybackPositionTicks

    programDataStore.updateItem({
        ...item,
        UserData: { ...item.UserData, Played: isPlayed, PlaybackPositionTicks: newPlaybackPositionTicks }
    })
    adjustWatchedCount(programDataStore, item, wasPlayed, isPlayed, oldPlaybackPositionTicks, newPlaybackPositionTicks)
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
                const oldPlaybackPositionTicks = item.UserData.PlaybackPositionTicks
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

                adjustWatchedCount(this.programDataStore, item, wasPlayed, userData.Played, oldPlaybackPositionTicks, userData.PlaybackPositionTicks)
            }
        })
    }
}
