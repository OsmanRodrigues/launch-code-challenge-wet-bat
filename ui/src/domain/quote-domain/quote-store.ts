import { action, computed, makeAutoObservable, observable } from 'mobx'
import { QuoteDataModel, QuoteViewModel } from '@entities/quote'
import { ServerRequestFacade, Resolvers } from '@frameworks/server-request'

export interface GetQuotesData {
    quotes: QuoteDataModel[]
}

export class QuoteStore {
    constructor(
        private isSSR = !!process.env.SSR,
        private request = new ServerRequestFacade(),
        private selectedQuoteMap: Record<number, QuoteDataModel> = {},
        public quotes: QuoteDataModel[] = [],
        public currentQuote: QuoteDataModel | null = null,
    ) {
        makeAutoObservable(this, {
            quotes: observable,
            currentQuote: observable,
            getQuotes: action,
            getQuoteById: action,
            createQuote: action,
            pendingQuotes: computed,
            //currentQuotes: computed
        })
    }

    getQuotes = async (
        resolvers?: Resolvers<GetQuotesData>,
        shouldCache?: boolean
    ) => {
        const result = await this.request.get<GetQuotesData>(
            '/quote',
            resolvers,
            shouldCache
        )

        if (result.data) this.quotes = result.data.quotes
    }

    getQuoteById = async (
        quoteId: number,
        resolvers?: Resolvers<QuoteDataModel>
    ) => {
        const quoteInCache = this.selectedQuoteMap?.[quoteId]

        if (quoteInCache) {
            this.currentQuote = quoteInCache
            return
        }
        const shouldGetList = this.isSSR && !this.quotes

        if (shouldGetList) await this.getQuotes({
            onFail: (err) => resolvers?.onFail?.(err)
        }, true)


        const quoteInList = this.quotes ? this.quotes.find(quote => quote.id === quoteId) : null

        if (quoteInList) {
            this.selectedQuoteMap[quoteId] = quoteInList
            this.currentQuote = quoteInList
            return
        }

        const { data: quote } = await this.request.get<QuoteDataModel>(
            `/quote/${quoteId}`, resolvers
        )

        this.selectedQuoteMap[quoteId] = quote
        this.currentQuote = quote
    }

    createQuote = async (
        quoteData: QuoteViewModel,
        resolvers?: Resolvers<QuoteDataModel>
    ) => {
        await this.request.post('/quote', quoteData, resolvers)
    }

    get pendingQuotes() {
        return this.quotes?.filter(quote => quote.statusCurrent === 'pending')
    }

    /* get currentQuotes() {
        return this.quotes
    } */

}

export const quoteStore = new QuoteStore()
