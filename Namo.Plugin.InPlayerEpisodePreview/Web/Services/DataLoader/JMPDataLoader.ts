import {DataLoader} from "./DataLoader";
import {ProgramDataStore} from "../ProgramDataStore";
import {AuthService} from "../AuthService/AuthService";


export class JMPDataLoader extends DataLoader {
    private _apiClient: any;

    constructor(protected authService: AuthService, protected programDataStore: ProgramDataStore, serverConnections: any, window: any) {
        super(authService, programDataStore);

        this._apiClient = serverConnections
            ? serverConnections.currentApiClient()
            : window.ApiClient;
        
        this._baseUrl = this.getServerUrl();
    }

    /*
     * retrieves the server url, while using local Jellyfin Media Player (JMP) client
     */
    private getServerUrl() {
        return this._apiClient.serverAddress() ?? '';
    }
}