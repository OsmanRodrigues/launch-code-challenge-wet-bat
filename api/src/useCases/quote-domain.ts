import { QuoteModelFactory } from '@entities'
import { Service } from 'typedi'

@Service()
export class QuoteDomain {

    getQuotes = async () => {
        const query = QuoteModelFactory.query()
        return await query
    }

}
