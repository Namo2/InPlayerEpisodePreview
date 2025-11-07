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

    public loadSeries(seriesId: string, onloadend: (this: XMLHttpRequest, ev: ProgressEvent<EventTarget>) => void): XMLHttpRequest {
        const requestUrl = `../${Endpoints.BASE}${Endpoints.LOAD_SERIES}`
            .replace('{id}', seriesId);

        const request = new XMLHttpRequest();
        request.responseType = 'json';

        request.open('GET', requestUrl);
        this.authService.addAuthHeaderIntoHttpRequest(request);
        request.send();
        request.onloadend = onloadend;

        return request;
    }
}