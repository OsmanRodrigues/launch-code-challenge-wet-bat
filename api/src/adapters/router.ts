import { Service } from 'typedi'
import KoaRouter from 'koa-router'
import { endpoint as routeEndpoint } from './constants'
import { QuoteController } from './quote-controller'

@Service()
export class RouterFacade extends KoaRouter {

    constructor(
        private endpoint = routeEndpoint,
        private quoteController: QuoteController,
    ) {super()}

    registerRoutes = () => {
        this.get(this.endpoint.quote, this.quoteController.getQuotes)
    }

}
