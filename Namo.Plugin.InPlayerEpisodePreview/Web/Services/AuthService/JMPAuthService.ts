import {AuthService} from "./AuthService";

export class JMPAuthService implements AuthService {
    private readonly _authHeader: string = 'Authorization';
    private _apiClient: any;
    private _authHeaderValue: string;
    
    constructor(private serverConnections: any, private window: any) {

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
        this._apiClient = this.serverConnections
            ? this.serverConnections.currentApiClient() // @ts-ignore
            : this.window.ApiClient;

        this.setAuthHeaderValue(`MediaBrowser Token=${this._apiClient.accessToken()}`)
        
        request.setRequestHeader(this._authHeader, this.getAuthHeaderValue());
    }
    
    public getApiClient(): any {
        return this._apiClient;
    }
}
