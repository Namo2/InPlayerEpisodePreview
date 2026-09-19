import {ProgramDataStore} from "./ProgramDataStore";
import {PreviewItem} from "../Models/PreviewData/PreviewItem";
import {Group} from "../Models/PreviewData/Group";
import {nextWatchCountDisplayMode, renderWatchedCountInnerHtml} from "../Models/PreviewData/WatchProgress";

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

export function renderWatchedCountInto(programDataStore: ProgramDataStore, element: HTMLElement, group: Group): void {
    const mode = element.dataset.mode !== undefined ? Number(element.dataset.mode) : programDataStore.pluginSettings.WatchCountDisplayMode
    element.innerHTML = renderWatchedCountInnerHtml(group, mode)
}

export function cycleWatchedCountMode(programDataStore: ProgramDataStore, element: HTMLElement, group: Group): void {
    const current = element.dataset.mode !== undefined ? Number(element.dataset.mode) : programDataStore.pluginSettings.WatchCountDisplayMode
    element.dataset.mode = String(nextWatchCountDisplayMode(current, programDataStore.pluginSettings.WatchCountDisplayMode))
    renderWatchedCountInto(programDataStore, element, group)
}

export function updateWatchedCountDom(programDataStore: ProgramDataStore, group: Group): void {
    if (group.groupId === programDataStore.activeGroupId) {
        const popupWatchedCount = document.getElementById('popupTitleContainer')?.querySelector<HTMLElement>('.previewGroupWatchedCount')
        if (popupWatchedCount) renderWatchedCountInto(programDataStore, popupWatchedCount, group)
    }

    const groupListWatchedCount = document.getElementById(`group-${group.groupId}`)?.querySelector<HTMLElement>('.previewGroupWatchedCount')
    if (groupListWatchedCount) renderWatchedCountInto(programDataStore, groupListWatchedCount, group)
}

export function updateBlurDom(programDataStore: ProgramDataStore, itemId: string, played: boolean): void {
    const settings = programDataStore.pluginSettings
    const shouldBlur = !(settings.OnlyBlurUnwatched && played)
    document.getElementById(`previewItemImageCard-${itemId}`)?.classList.toggle('blur', settings.BlurThumbnail && shouldBlur)
    document.getElementById(`item-${itemId}`)?.querySelector('.previewItemDescription')?.classList.toggle('blur', settings.BlurDescription && shouldBlur)
}

function playedRuntimeContribution(item: PreviewItem, played: boolean, playbackPositionTicks: number): number {
    return played ? (item.RunTimeTicks ?? 0) : playbackPositionTicks
}

export function adjustWatchedCount(
    programDataStore: ProgramDataStore,
    item: PreviewItem,
    wasPlayed: boolean,
    isPlayed: boolean,
    oldPlaybackPositionTicks: number,
    newPlaybackPositionTicks: number
): void {
    if (!programDataStore.pluginSettings.ShowWatchedCount) return

    const deltaPlayedCount = Number(isPlayed) - Number(wasPlayed)
    const deltaPlayedRuntimeTicks =
        playedRuntimeContribution(item, isPlayed, newPlaybackPositionTicks) -
        playedRuntimeContribution(item, wasPlayed, oldPlaybackPositionTicks)
    if (deltaPlayedCount === 0 && deltaPlayedRuntimeTicks === 0) return

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
    updateBlurDom(programDataStore, itemId, isPlayed)
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

                updateBlurDom(this.programDataStore, userData.ItemId, userData.Played)
                adjustWatchedCount(this.programDataStore, item, wasPlayed, userData.Played, oldPlaybackPositionTicks, userData.PlaybackPositionTicks)
            }
        })
    }
}
