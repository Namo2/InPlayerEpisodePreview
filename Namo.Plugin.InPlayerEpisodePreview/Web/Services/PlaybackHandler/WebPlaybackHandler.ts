import {PlaybackHandler} from "./PlaybackHandler";

export class WebPlaybackHandler extends PlaybackHandler {
    constructor() {
        super();
    }
    
    play(episodeId: string, startPositionTicks: number, serverId: string): Function {
        // @ts-ignore
        // return this.playbackManager.play(this.getPlaybackData(episodeId, serverId));
        
        return () => {};
    }
}