import { action, computed, makeAutoObservable, observable, runInAction } from 'mobx'
import { QuoteDataModel } from '@entities/quote'

export interface GetQuotesData {
    quotes: QuoteDataModel[]
}

export class QuoteStore {
    constructor(
        private apiBaseUrl = process.env.NEXT_PUBLIC_API_URL,
        private selectedQuoteMap: Map<number, QuoteDataModel> = new Map(),
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
        quoteId: string
    ) => {
        const id = +quoteId
        const quoteInCache = this.selectedQuoteMap.get(id)

        if (quoteInCache) {
            this.setCurrentQuote = quoteInCache

            return
        }

        const quoteInList = this.quotes
            ? this.quotes.find(quote => quote.id === id)
            : null

        if (quoteInList) {
            this.selectedQuoteMap.set(id, quoteInList)
            this.setCurrentQuote = quoteInList

            return
        }
    }

    set setCurrentQuote(quote: QuoteDataModel) {
        this.currentQuote = quote
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
