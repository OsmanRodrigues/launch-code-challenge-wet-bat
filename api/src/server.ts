import { salutation } from '@adapters/constants'
import { config, errorHandler, logger } from '@utils'
import Koa from 'koa'

export class ServerFacade extends Koa {

    constructor(
         private mainConfig = config
    ) {
        super()
    }

    run() {
        const { env } = this.mainConfig

        this
            .use(errorHandler.handle)
            .use(async ctx => {
                if (ctx.request.url === '/favicon.ico') {
                    return
                }

                ctx.body = { salutation }
            })
            .listen(Number(env?.PORT), env?.HOST, undefined, () => {
                logger.info(`App running at http://${env?.HOST}:${env?.PORT}`)
            })
    }

}
