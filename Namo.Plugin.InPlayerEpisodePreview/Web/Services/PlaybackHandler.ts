import {Logger} from "./Logger";
import {Endpoints} from "../Endpoints";

export class PlaybackHandler {
    constructor(private logger: Logger) { }

    async play(episodeId: string, startPositionTicks: number): Promise<void | Response> {
        try {
            const url = ApiClient.getUrl(`/${Endpoints.BASE}${Endpoints.PLAY_MEDIA}`
                .replace('{userId}', ApiClient.getCurrentUserId())
                .replace('{deviceId}', ApiClient.deviceId())
                .replace('{episodeId}', episodeId)
                .replace('{ticks}', startPositionTicks.toString()))

            return await ApiClient.ajax({ type: 'GET', url })
        } catch (ex) {
            return this.logger.error(`Couldn't start the playback of an episode`, ex)
        }
    }
}