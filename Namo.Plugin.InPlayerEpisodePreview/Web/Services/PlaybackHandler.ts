﻿import {ProgramDataStore} from "./ProgramDataStore";
import {Logger} from "./Logger";
import {Endpoints} from "../Endpoints";

export class PlaybackHandler {
    constructor(private programDataStore: ProgramDataStore, private logger: Logger) {
    }

    async play(episodeId: string, startPositionTicks: number): Promise<void | Response> {
        try {
            return await fetch(`../${Endpoints.BASE}${Endpoints.PLAY_MEDIA}`
                .replace('{userId}', this.programDataStore.userId)
                .replace('{episodeId}', episodeId)
                .replace('{ticks}', startPositionTicks.toString())
            );
        } catch (err) {
            // We Skip error messages, if it is a URL constructor argument. Because relative path can throw errors even if url is valid
            if (err instanceof TypeError) {
                return;
            }
            
            return this.logger.error(`Couldn't start the playback of an episode. Error: ${err}`);
        }
    }
}