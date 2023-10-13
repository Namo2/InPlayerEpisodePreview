import {DataFetcher} from "./DataFetcher";
import {ProgramDataStore} from "../ProgramDataStore";
import {DataLoader} from "../DataLoader/DataLoader";

export class JMPDataFetcher extends DataFetcher {
    constructor(programDataStore: ProgramDataStore, dataLoader: DataLoader, events: any, playbackManager: any) {
        super(programDataStore, dataLoader);
        events.on(playbackManager, 'playbackstart', this.onPlayback);
    }

    private onPlayback(e, player, state) {
        if (!state.NowPlayingItem)
            return;
        
        this.getProgramDataStore().setActiveMediaSourceId(state.NowPlayingItem.Id);
        // @ts-ignore
        this.getProgramDataStore().setUserId(window.ApiClient._currentUser.Id);

        // load the Episodes. This Data is actually already loaded in the background by the JMP client but couldn't be accessed
        // TODO: find a way to access the already loaded data
        // @ts-ignore
        window.ApiClient.getEpisodes(state.NowPlayingItem.SeriesId, {
                IsVirtualUnaired: !1,
                IsMissing: !1,
                UserId: this.getProgramDataStore().getUserId(),
                Fields: "Chapters"
        }).then(this.saveEpisodeData);
    }
}