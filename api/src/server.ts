import { salutation } from '@adapters/constants'
import { config } from '@utils/config'
import { logger } from '@utils/logger'
import Koa from 'koa'

export class ServerFacade {

    constructor(
        private server = new Koa(),
        private env = config.env
    ) {

    }

    run() {
        this.server.use(async ctx => {
            ctx.body = { salutation }
        })

        this.server.listen(Number(this.env?.PORT), this.env?.HOST, undefined, () => {
            logger.info(`App running at http://${this.env?.HOST}:${this.env?.PORT}`)
        })
    }

}
