import {DataFetcher} from "./DataFetcher";
import {ProgramDataStore} from "../ProgramDataStore";
import {Logger} from "../Logger";
import {AuthService} from "../AuthService/AuthService";
import {DataLoader} from "../DataLoader/DataLoader";

export class WebDataFetcher extends DataFetcher {
    constructor(programDataStore: ProgramDataStore, dataLoader: DataLoader, private authService: AuthService, private logger: Logger) {
        super(programDataStore, dataLoader);

        const {fetch: originalFetch} = window;
        window.fetch = async (...args) => {
            // let [resource, config] = args;
            let resource: URL = args[0] as URL;
            let config: RequestInit = args[1];

            if (config) {
                let auth = config.headers[this.authService.getAuthHeader()];
                this.authService.setAuthHeaderValue(auth ? auth : '');
            }

            this.logger.debug(`Fetching data`);
            const response = await originalFetch(resource, config);

            let url = new URL(resource);
            let urlParts = url.pathname.split('/');
            let urlDictionary = sortUrlPartsIntoDictionary(urlParts.slice(1));

            for (const key of Object.keys(urlDictionary)) {
                // save the userId for later use
                if (!this.getProgramDataStore().getUserId() && key === 'Users') {
                    this.getProgramDataStore().setUserId(urlDictionary[key]);
                }

                if (key === 'PlaybackInfo') {
                    this.getProgramDataStore().setActiveMediaSourceId(urlDictionary['Items']);
                    continue;
                }

                if (key === 'Items') {
                    let handleResponseFunction = (data) => handleItemResponse(data);
                    if (!urlDictionary[key])
                        handleResponseFunction = (data) => this.saveEpisodeData(data);

                    response.clone().json().then(handleResponseFunction);
                    continue;
                }

                if (key === 'Episodes') {
                    response.clone().json().then((data) => this.saveEpisodeData(data));
                }
            }

            return response;

            function sortUrlPartsIntoDictionary(urlParts) {
                let urlPartsDictionary = {};
                for (let i = 0; i < urlParts.length; i++) {
                    if (i % 2 === 0)
                        urlPartsDictionary[urlParts[i]] = urlParts[i + 1];
                }

                return urlPartsDictionary;
            }

            function handleItemResponse(data) {
                if (data.Type === 'Movie') {
                    document.getElementById('popupPreviewButton').classList.add('hide');
                    logger.debug(`Found movie -- hiding preview button`)
                } else if (data.Type === 'Series') {
                    document.getElementById('popupPreviewButton').classList.remove('hide');
                    logger.debug(`Found series -- showing preview button`)
                }
            }
        };
    }
}