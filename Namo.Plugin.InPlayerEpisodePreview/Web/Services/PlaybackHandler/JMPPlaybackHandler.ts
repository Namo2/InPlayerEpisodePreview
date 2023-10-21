import {PlaybackHandler} from "./PlaybackHandler";

export class JMPPlaybackHandler extends PlaybackHandler {
    constructor(private playbackManager: unknown) {
        super();
    }

    play(episodeId: string, startPositionTicks: number, serverId: string): Function {
        // @ts-ignore
        return this.playbackManager.play(this.getPlaybackData(episodeId, startPositionTicks, serverId));
    }
}