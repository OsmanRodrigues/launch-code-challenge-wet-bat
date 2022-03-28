import { QuoteDomain } from '@useCases/quote-domain'
import { ErrorHandlerConstant, HttpStatusCodeConstant } from '@utils'
import { CustomError } from '@utils/custom-error'
import { Service } from 'typedi'
import { ControllerMethod } from './type'

@Service()
export class QuoteController {

    constructor(private domain: QuoteDomain) { }

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
