﻿import {AuthService} from "../AuthService/AuthService";
import {ProgramDataStore} from "../ProgramDataStore";
import {Endpoints} from "./Endpoints";

export abstract class DataLoader {
    protected _baseUrl: string = '';
    
    constructor(protected authService: AuthService, protected programDataStore: ProgramDataStore) {
    }

    public loadEpisodeDescription(episodeId: string, onloadend: Function): XMLHttpRequest {
        let requestUrl = (this.getBaseUrl() +  Endpoints.EPISODE_INFO)
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
    
    abstract getBaseUrl(): string;
}