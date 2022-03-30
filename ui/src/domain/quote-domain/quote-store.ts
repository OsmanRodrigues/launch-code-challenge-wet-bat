import { action, computed, makeAutoObservable, observable } from 'mobx'
import { QuoteDataModel } from '@entities/quote'
import { ServerRequestFacade, Resolvers } from '@frameworks/server-request'

export interface GetQuotesData {
    quotes: QuoteDataModel[]
}

export class QuoteListStore {

    constructor(
        private request = new ServerRequestFacade<GetQuotesData>(),
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

    get pendingQuotes() {
        console.log(this.request.state.lastUpdate)

        return this.quotes?.filter(quote => quote.statusCurrent === 'pending')
    }

}

export const quoteListStore = new QuoteListStore()
