import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx'
import { QuoteDataModel } from '@entities/quote'

export interface GetQuotesData {
    quotes: QuoteDataModel[]
}

export class QuoteStore {
    constructor(
        private apiBaseUrl = process.env.NEXT_PUBLIC_API_URL,
        private selectedQuoteMap: Record<number, QuoteDataModel> = {},
        public quotes: QuoteDataModel[] | null = null,
        public currentQuote: QuoteDataModel | null = null
    ) {
        makeAutoObservable(this, {
            quotes: observable,
            currentQuote: observable,
            getQuotes: action,
            getQuoteById: action,
            createQuote: action,
            pendingQuotes: computed({
                equals: (a: QuoteDataModel[] | null, b) =>
                    a?.length === b?.length
            })
        })
    }

    getQuotes = () => fetch(`${this.apiBaseUrl}/quote`, {method: 'get'})

    set setQuotes(quotes: QuoteDataModel[]) {
        this.quotes = quotes
    }

    getQuoteById = async (
        quoteId: number
    ) => {
        const quoteInCache = this.selectedQuoteMap?.[quoteId]

        if (quoteInCache) {
            runInAction(() => {
                this.currentQuote = quoteInCache
            })
            return
        }

        const quoteInList = this.quotes
            ? this.quotes.find(quote => quote.id === quoteId)
            : null

        if (quoteInList) {
            this.selectedQuoteMap[quoteId] = quoteInList
            runInAction(() => {
                this.currentQuote = quoteInList
            })
            return
        }

        /*
        TODO: refactor this
        this.selectedQuoteMap[quoteId] = {quote}
        runInAction(() => {
            this.currentQuote = quote
        }) */
    }

    createQuote = (quoteData: string) => fetch(
        `${this.apiBaseUrl}/quote`,
        {
            method: 'post',
            body: quoteData,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    get pendingQuotes() {
        return this.quotes?.filter(quote => quote.statusCurrent === 'pending')
    }
}

export const quoteStore = new QuoteStore()
