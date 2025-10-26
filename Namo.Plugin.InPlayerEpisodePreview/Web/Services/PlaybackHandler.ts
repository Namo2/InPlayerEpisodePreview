import {ProgramDataStore} from "./ProgramDataStore";
import {Logger} from "./Logger";
import {Endpoints} from "../Endpoints";

export class PlaybackHandler {
    constructor(private programDataStore: ProgramDataStore, private logger: Logger) {
    }

    async play(episodeId: string, startPositionTicks: number): Promise<void | Response> {
        try {
            const url = new URL(`${window['ApiClient']['_serverAddress']}/${Endpoints.BASE}${Endpoints.PLAY_MEDIA}`
                .replace('{userId}', this.programDataStore.userId)
                .replace('{deviceId}', window['ApiClient']['_deviceId'])
                .replace('{episodeId}', episodeId)
                .replace('{ticks}', startPositionTicks.toString()))
            
            return await fetch(url)
        } catch (ex) {
            return this.logger.error(`Couldn't start the playback of an episode`, ex)
        }
    }
}