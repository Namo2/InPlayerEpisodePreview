export class Logger {
    constructor(private log_prefix: string = "[InPlayerEpisodePreview]") {
    }

    public debug(msg: string): void {
        console.debug(`${this.log_prefix} ${msg}`);
    }

    public error(msg: string): void {
        console.error(`${this.log_prefix} ${msg}`);
    }

    public info(msg: string): void {
        console.info(`${this.log_prefix} ${msg}`);
    }

}
