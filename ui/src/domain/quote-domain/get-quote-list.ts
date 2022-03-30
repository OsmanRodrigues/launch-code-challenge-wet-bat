import { QuoteDataModel } from '@entities/quote'
import { RequestState, Resolvers } from '@frameworks/server-request'
import { useCallback } from 'react'
import { quoteService } from './quote-service'

interface GetQuotesData {
    quotesList: {
        quotes: QuoteDataModel[]
    }
}

export const useGetQuotes = (): [
    RequestState<GetQuotesData>,
    (resolvers?: Resolvers<QuoteDataModel> | undefined, shouldCache?: boolean) => void
] => {
    const state = quoteService.state

    const get = useCallback(
        (resolvers?: Resolvers<QuoteDataModel>, shouldCache?: boolean) => {
            quoteService.get('/quote', 'quotesList', undefined, resolvers, shouldCache)
        },
        []
    )

    return [state, get]
}
