export class Logger {
    constructor(private log_prefix: string = "[InPlayerEpisodePreview]") {
    }

    public debug(msg: string, ...details: any[]): void {
        // console.debug(`${this.log_prefix} ${msg}`, details);
    }

    public error(msg: string, ...details: any[]): void {
        console.error(`${this.log_prefix} ${msg}`, details);
    }

    public info(msg: string, ...details: any[]): void {
        console.info(`${this.log_prefix} ${msg}`, details);
    }

}
