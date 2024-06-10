import {AuthService} from "./AuthService";
import {ProgramDataStore} from "./ProgramDataStore";
import {Endpoints} from "../Endpoints";

export class DataLoader {
    constructor(protected authService: AuthService, protected programDataStore: ProgramDataStore) {
    }

    public loadEpisodeDescription(episodeId: string, onloadend: Function): XMLHttpRequest {
        let requestUrl = Endpoints.EPISODE_INFO
            .replace('{userId}', this.programDataStore.userId)
            .replace('{episodeId}', episodeId);

        let episodeDescriptionRequest = new XMLHttpRequest();
        episodeDescriptionRequest.responseType = 'json';

        episodeDescriptionRequest.open('GET', requestUrl);
        this.authService.addAuthHeaderIntoHttpRequest(episodeDescriptionRequest);
        episodeDescriptionRequest.send();
        episodeDescriptionRequest.onloadend = () => onloadend();

        return episodeDescriptionRequest;
    }
}