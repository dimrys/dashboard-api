import {Logger} from 'tslog'
import {ILogger} from "./logger.interface";
import {injectable} from "inversify";
import 'reflect-metadata'

@injectable()
export class LoggerService implements ILogger{
    public logger: Logger

    constructor() {
        this.logger = new Logger({
            displayInstanceName: false,
            displayLoggerName: false,
            displayFilePath: 'hidden',
            displayFunctionName: false
        })
    }

    log(...args: Array<unknown>) {
        this.logger.info(...args)
    }

    error(...args: Array<unknown>) {
        this.logger.error(...args)
    }

    warn(...args: Array<unknown>) {
        this.logger.warn(...args)
    }

}