import { QuoteDomain } from '@useCases/quote-domain'
import { Service } from 'typedi'
import { ControllerMethod } from './type'

@Service()
export class QuoteController {

    constructor(
        private domain: QuoteDomain
    ) { }

    getQuotes: ControllerMethod = async (ctx) => {
        const quotes = await this.domain.getQuotes()
        ctx.body = { quotes }
    }

}
