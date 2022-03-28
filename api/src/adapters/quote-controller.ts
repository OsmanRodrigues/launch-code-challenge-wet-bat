import { QuoteDomain } from '@useCases/quote-domain'
import { Service } from 'typedi'

@Service()
export class QuoteController {

    constructor(
        private domain: QuoteDomain
    ) { }

    getQuotes = async (ctx) => {
        const quotes = await this.domain.getQuotes()

        ctx.body = { quotes }
    }

}
