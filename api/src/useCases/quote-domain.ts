import { QuoteModelFactory } from '@entities'
import { Service } from 'typedi'
import { DomainQueryMethod } from './type'

@Service()
export class QuoteDomain {

    constructor(private query = QuoteModelFactory.query()) { }

    getQuotes: DomainQueryMethod<QuoteModelFactory[]> = async () => await this.query

}
