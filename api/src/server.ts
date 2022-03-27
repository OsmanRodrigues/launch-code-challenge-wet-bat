import { salutation } from '@adapters/constants'
import { QuoteModelFactory } from '@entities'
import { config, errorHandler, logger } from '@utils'
import Koa from 'koa'
import KoaRouter from 'koa-router'

export class ServerFacade extends Koa {

    constructor(
        private mainConfig = config,
        private router = new KoaRouter()
    ) {
        super()
    }

    run() {
        const { env } = this.mainConfig

        this.router.get('/quotes', async ctx => {
            const query = QuoteModelFactory.query()

            ctx.body = { quotes: await query }
        })

        this
            .use(errorHandler.handle)
            .use(this.router.routes())
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
