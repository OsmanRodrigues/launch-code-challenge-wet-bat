import { salutation } from '@adapters/constants'
import { config } from '@utils/config'
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
            console.log(`App running at http://${this.env?.HOST}:${this.env?.PORT}`)
        })
    }
}
