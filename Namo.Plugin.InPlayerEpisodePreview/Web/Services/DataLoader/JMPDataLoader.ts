import {DataLoader} from "./DataLoader";
import {ProgramDataStore} from "../ProgramDataStore";
import {AuthService} from "../AuthService/AuthService";


export class JMPDataLoader extends DataLoader {
    private _apiClient: any;

    constructor(protected authService: AuthService, protected programDataStore: ProgramDataStore, private serverConnections: any, private window: any) {
        super(authService, programDataStore);
    }

    /*
     * retrieves the server url, while using local Jellyfin Media Player (JMP) client
     */
    private getServerUrl() {
        return this._apiClient.serverAddress() ?? '';
    }
    
    getBaseUrl(): string {
        this._apiClient = this.serverConnections
            ? this.serverConnections.currentApiClient() // @ts-ignore
            : this.window.ApiClient;

        this._baseUrl = this.getServerUrl();
        
        return this._baseUrl;
    }
}