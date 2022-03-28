import { QuoteDataModel, QuoteModelFactory } from '@entities'
import { Service } from 'typedi'
import { DomainQueryMethod } from './type'

@Service()
export class QuoteDomain {

    constructor(private query = QuoteModelFactory.query()) { }

    getQuotes: DomainQueryMethod<QuoteModelFactory[]> = async () => await this.query

    getQuoteById = async (param) => {
        const result = await this.query
            .select()
            .where(param)

        if(result.length) return result[0]

        return null
    }

}
