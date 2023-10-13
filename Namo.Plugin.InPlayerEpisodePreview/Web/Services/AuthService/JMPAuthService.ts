import {AuthService} from "./AuthService";

export class JMPAuthService implements AuthService {
    private readonly _authHeader: string = 'Authorization';
    private readonly _apiClient: any;
    private _authHeaderValue: string;
    
    constructor(serverConnections: any, window: any) {
        this._apiClient = serverConnections
            ? serverConnections.currentApiClient()
            : window.ApiClient;
        
        this.setAuthHeaderValue(`MediaBrowser Token=${this._apiClient.accessToken()}`)
    }

    public getAuthHeader(): string {
        return this._authHeader;
    }
    
    private getAuthHeaderValue(): string {
        return this._authHeaderValue;
    }
    
    public setAuthHeaderValue(value: string): void {
        this._authHeaderValue = value;
    }

    public addAuthHeaderIntoHttpRequest(request: XMLHttpRequest): void {
        request.setRequestHeader(this._authHeader, this.getAuthHeaderValue());
    }
    
    public getApiClient(): any {
        return this._apiClient;
    }
}
