import { action, computed, makeAutoObservable, observable } from 'mobx'
import { QuoteDataModel, QuoteViewModel } from '@entities/quote'
import { ServerRequestFacade, Resolvers } from '@frameworks/server-request'

export interface GetQuotesData {
    quotes: QuoteDataModel[]
}

export class QuoteStore {

    constructor(
        private request = new ServerRequestFacade(),
        public quotes: QuoteDataModel[] | null = []
    ) {
        makeAutoObservable(this, {
            quotes: observable,
            getQuotes: action,
            pendingQuotes: computed
        })
    }

    getQuotes = async (resolvers?: Resolvers<GetQuotesData>, shouldCache?: boolean) => {
        const result = await this.request.get(
            '/quote',
            undefined,
            resolvers,
            shouldCache
        )

        if(result.data) this.quotes = result.data.quotes
    }

    createQuote = async (quoteData: QuoteViewModel, resolvers?: Resolvers<QuoteDataModel>) => {
        await this.request.post('/quote', quoteData, resolvers)
    }

    get pendingQuotes() {
        return this.quotes?.filter(quote => quote.statusCurrent === 'pending')
    }

}

export const quoteStore = new QuoteStore()
