import {AuthService} from "./AuthService";
import {Endpoints} from "../Endpoints";

export class DataLoader {
    constructor(protected authService: AuthService) {
    }

    public loadEpisodeDescription(episodeId: string, onloadend: (this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => void): XMLHttpRequest {
        let requestUrl = `../${Endpoints.BASE}${Endpoints.EPISODE_DESCRIPTION}`
            .replace('{episodeId}', episodeId);

        let episodeDescriptionRequest = new XMLHttpRequest();
        episodeDescriptionRequest.responseType = 'json';

        episodeDescriptionRequest.open('GET', requestUrl);
        this.authService.addAuthHeaderIntoHttpRequest(episodeDescriptionRequest);
        episodeDescriptionRequest.send();
        episodeDescriptionRequest.onloadend = onloadend;

        return episodeDescriptionRequest;
    }
}