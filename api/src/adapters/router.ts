import KoaRouter from  '@koa/router'
import { allowedMethods, endpoint } from './constants'
import { QuoteController } from './quote-controller'
import { config } from '@utils/config'

export class RouterFacade extends KoaRouter {

    constructor(
        private quoteController = new QuoteController(),
        public versionPrefix = `/v${config.env.VERSION[0]}`
    ) {
        super({
            methods: allowedMethods,
            prefix: versionPrefix
        })
    }

    registerRoutes = () => {
        //Fallbacks to general routes
        this.get(endpoint.ignore, ()=> null)
        this.get(endpoint.main, async ctx => {
            ctx.body = { salutation: 'hello world' }
        })
        //Api routes
        this.get(endpoint.quote, this.quoteController.get)
        this.get(endpoint.quoteById, this.quoteController.getById)
        this.post(endpoint.quote, this.quoteController.create)
    }

}
