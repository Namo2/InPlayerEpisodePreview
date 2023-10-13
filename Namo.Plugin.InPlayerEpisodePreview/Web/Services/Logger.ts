export class Logger {
    constructor(private log_prefix: string = "[InPlayerEpisodePreview]") {
    }

    public debug(msg) {
        console.debug(`${this.log_prefix} ${msg}`);
    }

    public error(msg) {
        console.error(`${this.log_prefix} ${msg}`);
    }

    public info(msg) {
        console.info(`${this.log_prefix} ${msg}`);
    }

}
