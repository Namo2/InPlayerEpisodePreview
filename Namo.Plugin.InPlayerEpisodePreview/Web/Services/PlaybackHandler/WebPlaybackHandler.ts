import {PlaybackHandler} from "./PlaybackHandler";
import {ProgramDataStore} from "../ProgramDataStore";
import {DataLoader} from "../DataLoader/DataLoader";

export class WebPlaybackHandler extends PlaybackHandler {
    constructor(private dataLoader: DataLoader, private programDataStore: ProgramDataStore) {
        super();
    }
    
    play(episodeId: string, startPositionTicks: number, serverId: string): Promise<void | Response> {
        return fetch(`${this.dataLoader.getBaseUrl()}/InPlayerPreview/Users/${this.programDataStore.userId}/Items/${episodeId}/Play/${startPositionTicks}`).catch(err => console.log('[IPEP]' + err));
    }
}