import {Logger} from "./Logger";
import {Endpoints} from "../Endpoints";
import {ItemVersionsResult} from "../Models/PreviewData/ItemVersion";

export class PlaybackHandler {
    constructor(private logger: Logger) { }

    async play(itemId: string, startPositionTicks: number, mediaSourceId?: string): Promise<void | Response> {
        try {
            const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.PLAY_MEDIA}`
                .replace('{itemId}', itemId)
                .replace('{ticks}', startPositionTicks.toString()),
                mediaSourceId ? { mediaSourceId } : undefined)

            return await ApiClient.ajax({ type: 'GET', url })
        } catch (ex) {
            return this.logger.error(`Couldn't start the playback of an item`, ex)
        }
    }

    async getVersions(itemId: string): Promise<ItemVersionsResult | null> {
        try {
            const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.ITEM_VERSIONS}`
                .replace('{userId}', ApiClient.getCurrentUserId())
                .replace('{itemId}', itemId))

            return await ApiClient.ajax({ type: 'GET', url, dataType: 'json' })
        } catch (ex) {
            this.logger.error(`Couldn't load the versions of item ${itemId}`, ex)
            return null
        }
    }
}
