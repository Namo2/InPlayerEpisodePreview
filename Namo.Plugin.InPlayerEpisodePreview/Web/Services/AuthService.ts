export class AuthService {
    private readonly _authHeader: string = 'Authorization';
    private _authHeaderValue: string = '';

    constructor() {
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
}
