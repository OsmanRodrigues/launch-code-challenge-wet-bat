import { EntityFactory, Quote, QuoteDataModel, quoteViewFields, QuoteViewModel } from '@entities'
import { Service } from 'typedi'
import { DomainMethod } from './type'
import { randomUUID } from 'crypto'

@Service()
export class QuoteDomain {

    constructor(
        private quoteFactory = new EntityFactory<QuoteViewModel, QuoteDataModel>(Quote)
    ) { }

    create: DomainMethod<QuoteViewModel, Quote> = async (infos) => {
        const newQuote = this.quoteFactory.build(
            infos,
            quote => {
                quote.sysId = randomUUID()
            }
        )

        return await Quote.query().insert(newQuote)
    }

    get: DomainMethod<void,Quote[]> = async () => await Quote.query()
        .select(quoteViewFields)

    getById: DomainMethod<number, Quote | null> = async (id) => {
        if (!id) throw new Error('getById param id must be provided')

        const result = await Quote.query()
            .select(quoteViewFields)
            .where({id})

        if(result.length) return result[0]

        return null
    }

}
