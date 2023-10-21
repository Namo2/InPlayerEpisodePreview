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
            let resource: URL = args[0] as URL;
            let config: RequestInit = args[1];
            
            if (config) {
                let auth = config.headers[this.authService.getAuthHeader()];
                this.authService.setAuthHeaderValue(auth ? auth : '');
            }
            
            this.logger.debug(`Fetching data`);
            const response = await originalFetch(resource, config);

            let url = new URL(resource);
            let urlPathname = url.pathname;
            
            if (urlPathname.includes('PlaybackInfo')) {
                this.logger.debug('Received PlaybackInfo');
                
                // save the media id of the currently played video
                this.getProgramDataStore().activeMediaSourceId = extractKeyFromString(urlPathname, 'Items/', '/');
                
            } else if (urlPathname.includes('Episodes')) {
                this.logger.debug('Received Episodes');
                
                this.getProgramDataStore().userId = extractKeyFromString(url.search, 'UserId=', '&');
                response.clone().json().then((data) => this.saveEpisodeData(data));
                
            } else if (urlPathname.includes('Items') && url.search.includes('ParentId')) {
                this.logger.debug('Received Episode Items');
                
                this.getProgramDataStore().userId = extractKeyFromString(urlPathname, 'Users/', '/');
                response.clone().json().then((data) => this.saveEpisodeData(data));
            }

            return response;

            function extractKeyFromString(searchString: string, startString: string, endString: string): string {
                let startIndex = searchString.indexOf(startString) + startString.length;
                let endIndex = searchString.indexOf(endString, startIndex);

                return searchString.substring(startIndex, endIndex);
            }
        };
    }
}