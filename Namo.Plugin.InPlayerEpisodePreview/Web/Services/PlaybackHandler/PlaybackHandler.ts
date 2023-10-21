export abstract class PlaybackHandler {
    abstract play(episodeId: string, startPositionTicks: number, serverId: string): Function;
    
    protected getPlaybackData(episodeId: string, startPositionTicks: number, serverId: string) {
        return {
            ids: [episodeId],
            startPositionTicks: startPositionTicks,
            serverId: serverId
        };
    }
}