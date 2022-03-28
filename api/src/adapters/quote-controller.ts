import { QuoteDomain } from '@useCases/quote-domain'
import { ErrorHandlerConstant, HttpStatusCodeConstant } from '@utils'
import { CustomError } from '@utils/custom-error'
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

    getQuoteById: ControllerMethod = async (ctx) => {
        const quote = await this.domain.getQuoteById(ctx.params)

        if (!quote) throw new CustomError(
            'Resgiter not found.',
            ErrorHandlerConstant.NotFoundError,
            HttpStatusCodeConstant.NotFound
        )

        ctx.body = quote
    }
}
