/**
 * Imports most properties from the Jellyfin ApiClient which is available with the WebClient
 * https://github.com/jellyfin/jellyfin-web/blob/master/src/apiclient.d.ts
 */
declare global {
    const ApiClient: {
        ajax(request: any): Promise<any>
        deviceId(): string
        getCurrentUserId(): string
        getItem(userId: string, itemId: string): Promise<{ Type?: string }>
        getUrl(name: string, params?: any, serverAddress?: string): string
    }

    const Events: {
        on(source: object, type: string, handler: (event: { type: string }, ...args: any[]) => void): void
        off(source: object, type: string, handler: (event: { type: string }, ...args: any[]) => void): void
        trigger(source: object, type: string, args?: any[]): void
    }
}

export {}
