import express, {Express} from "express";
import {Server} from 'http'
import {LoggerService} from "./logger/logger.service";
import {UsersController} from "./users/users.controller";

export class App {
    app: Express
    server: Server
    port: number
    logger: LoggerService
    usersController: UsersController

    constructor(logger: LoggerService, usersController: UsersController) {
        this.app = express()
        this.port = 8000
        this.logger = logger
        this.usersController = usersController
    }

    useRouts() {
        this.app.use('/users', this.usersController.router)
    }

    public async init() {
        this.useRouts()
        this.server = this.app.listen(this.port)
        // console.log(`Сервер запущен на ${this.port} порту`)
        this.logger.log(`Сервер запущен на ${this.port} порту`)
    }
}