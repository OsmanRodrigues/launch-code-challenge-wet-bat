import { RouterFacade } from '@adapters'
import { config, errorHandler, logger } from '@utils'
import Koa from 'koa'
import Container, { Service } from 'typedi'

@Service()
export class ServerFacade extends Koa {

    constructor(
        private router: RouterFacade,
        private mainConfig = config
    ) {super()}

    run = () => {
        const { env } = this.mainConfig

        this.router.registerRoutes()

        this
            .use(errorHandler.handle)
            .use(this.router.routes())
            .use(this.router.allowedMethods())
            .listen(Number(env?.PORT), env?.HOST, undefined, () => {
                logger.info(`App running at http://${env?.HOST}:${env?.PORT}${this.router.versionPrefix}`)
            })
    }

}

export const server = Container.get(ServerFacade)
