import {ProgramDataStore} from "./ProgramDataStore";
import {PreviewItem} from "../Models/PreviewData/PreviewItem";

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

export class DataFetcher {
    constructor(private programDataStore: ProgramDataStore) {
        Events.on(ApiClient, 'message', (_event, message: WebSocketMessage): void => {
            if (message.MessageType !== 'UserDataChanged') return
            if (message.Data.UserId !== ApiClient.getCurrentUserId()) return

            const userDataList: UserDataChangedEntry[] = message.Data.UserDataList ?? []
            for (const userData of userDataList) {
                const item: PreviewItem = this.programDataStore.getItemById(userData.ItemId)
                if (!item) continue

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
            }
        })
    }
}
