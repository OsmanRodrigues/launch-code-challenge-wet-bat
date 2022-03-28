import { QuoteModelFactory, quoteViewFields, QuoteViewModel } from '@entities'
import { Service } from 'typedi'
import { DomainMethod } from './type'

@Service()
export class QuoteDomain {

    getQuotes: DomainMethod<QuoteModelFactory[]> = async () => await QuoteModelFactory.query()
        .select(quoteViewFields)

    getQuoteById = async (id: number) => {
        if (!id) throw new Error('getQuoteById param id must be provided')

        const result = await QuoteModelFactory.query()
            .select(quoteViewFields)
            .where({id})

        if(result.length) return result[0]

        return null
    }

}
