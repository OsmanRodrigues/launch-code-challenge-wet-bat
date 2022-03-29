import { RouterFacade } from '@adapters'
import { config, errorHandler, logger } from '@utils'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

export class ServerFacade extends Koa {

    constructor(
        private router = new RouterFacade(),
        private mainConfig = config
    ) {super()}

    run = () => {
        const { env } = this.mainConfig

        this.router.registerRoutes()

        this
            .use(cors())
            .use(errorHandler.handle)
            .use(bodyParser())
            .use(this.router.routes())
            .use(this.router.allowedMethods())
            .listen(Number(env?.PORT), env?.HOST, undefined, () => {
                logger.info(`App running at http://${env?.HOST}:${env?.PORT}${this.router.versionPrefix}`)
            })
    }

}
