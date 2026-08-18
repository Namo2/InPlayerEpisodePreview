import {LogLevel} from "../Models/LogLevel";

export class Logger {
    private logLevel: LogLevel = LogLevel.Information

    constructor(private log_prefix: string = "[InPlayerEpisodePreview]") {
    }

    public setLogLevel(level: LogLevel): void {
        this.logLevel = level
    }

    public debug(msg: string, ...details: any[]): void {
        if (this.logLevel < LogLevel.Debug) return
        console.debug(`${this.log_prefix} ${msg}`, details);
    }

    public error(msg: string, ...details: any[]): void {
        if (this.logLevel < LogLevel.Error) return
        console.error(`${this.log_prefix} ${msg}`, details);
    }

    public info(msg: string, ...details: any[]): void {
        if (this.logLevel < LogLevel.Information) return
        console.info(`${this.log_prefix} ${msg}`, details);
    }

}
