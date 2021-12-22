import {App} from "./app";
import {LoggerService} from "./logger/logger.service";
import {UsersController} from "./users/users.controller";
import {ExeptionFilter} from "./errors/exeption.filter";
import {Container, ContainerModule, interfaces} from "inversify";
import {ILogger} from "./logger/logger.interface";
import {TYPES} from "./types";
import {IExeptionFilter} from "./errors/exeption.filter.interface";

// async function bootstrap() {
//     const logger = new LoggerService()
//     const app = new App(
//         logger,
//         new UsersController(logger),
//         new ExeptionFilter(logger)
//     )
//
// }
// bootstrap()

export const appBindings = new ContainerModule((bind: interfaces.Bind) => {
    bind<ILogger>(TYPES.ILogger).to(LoggerService)
    bind<IExeptionFilter>(TYPES.ExeptionFilter).to(ExeptionFilter)
    bind<UsersController>(TYPES.UsersController).to(UsersController)
    bind<App>(TYPES.Application).to(App)
})

function bootstrap() {
    const appContainer = new Container()
    appContainer.load(appBindings)
    const app = appContainer.get<App>(TYPES.Application)
    app.init()
    return {appContainer, app}
}





export const {app, appContainer} = bootstrap()