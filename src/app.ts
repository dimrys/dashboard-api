import express, {Express} from "express";
import {Server} from 'http'
import {UsersController} from "./users/users.controller";
import {ExeptionFilter} from "./errors/exeption.filter";
import {ILogger} from "./logger/logger.interface";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import 'reflect-metadata'

@injectable()
export class App {
    app: Express
    server: Server
    port: number
    // logger: ILogger
    // usersController: UsersController
    // exeptionFilter: ExeptionFilter

    constructor(
        @inject(TYPES.ILogger) private logger: ILogger,
        @inject(TYPES.UsersController) private usersController: UsersController,
        @inject(TYPES.ExeptionFilter) private exeptionFilter: ExeptionFilter,

    ) {
        this.app = express()
        this.port = 8000
        // this.logger = logger
        // this.usersController = usersController
        // this.exeptionFilter = exeptionFilter
    }

    useRouts() {
        this.app.use('/users', this.usersController.router)
    }

    useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter))
    }

    public async init() {
        this.useRouts()
        this.useExeptionFilters()
        this.server = this.app.listen(this.port)
        // console.log(`Сервер запущен на ${this.port} порту`)
        this.logger.log(`Сервер запущен на ${this.port} порту`)
    }
}