export interface AuthService {
    getAuthHeader(): string;
    setAuthHeaderValue(value: string): void;
    addAuthHeaderIntoHttpRequest(request: XMLHttpRequest): void;
}
