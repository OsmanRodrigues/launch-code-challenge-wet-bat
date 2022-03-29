import { QuoteDomain } from '@domain/quote-domain'
import { ErrorHandlerConstant, HttpStatusCodeConstant } from '@utils'
import { CustomError } from '@utils/custom-error'
import { ControllerMethod } from './type'

export class QuoteController {

    constructor(private domain = new QuoteDomain()) { }

    create: ControllerMethod = async (ctx) => {
        const createdQuote = await this.domain.create(ctx.request.body)

        ctx.body = { message: `Quote created successfully. Id: ${createdQuote.id}.` }
    }

    get: ControllerMethod = async (ctx) => {
        const quotes = await this.domain.get()
        ctx.body = { quotes }
    }

    getById: ControllerMethod = async (ctx) => {

        const quote = await this.domain.getById(Number(
            ctx.params.id
        ))

        if (!quote) throw new CustomError(
            'Resgiter not found.',
            ErrorHandlerConstant.NotFoundError,
            HttpStatusCodeConstant.NotFound
        )

        ctx.body = quote
    }

}
