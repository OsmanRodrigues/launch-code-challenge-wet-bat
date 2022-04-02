import { createContext } from 'react'
import { enableStaticRendering } from 'mobx-react-lite'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils/constants'
import { QuoteDataModel } from '@entities/quote'
import { QuotesDetaislSection } from '@atomic/components/quotes-layout'
import { quoteStore } from '@domain/quote-domain'

enableStaticRendering(true)

const { quotes: quotesPage } = pageData

type IQuotesPageError = Record<'onGetQuotes'|'onGetCurrentQuote', string | null>
export interface IQuotesPage {
    currentQuote: QuoteDataModel | null
    quotes: QuoteDataModel[] | null
    error: IQuotesPageError
}

const pageError: IQuotesPageError = {
    onGetQuotes: null,
    onGetCurrentQuote: null
}

export const QuotesPageContext = createContext<IQuotesPage>({
    currentQuote: null,
    quotes: [],
    error: { ...pageError }
})

const QuotesPage: NextPage<IQuotesPage> = ({currentQuote, error, quotes}) => {
    const value = { currentQuote, error, quotes }

    return (
        <QuotesPageContext.Provider value={value}>
            <Helmet title={quotesPage.title} description={quotesPage.description} />
            <QuotesDetaislSection />
        </QuotesPageContext.Provider>
    )
}

export const getStaticProps: GetStaticProps<
    IQuotesPage,
    { id: string }
> = async context => {
    const requestError = { ...pageError }

    if(context.params) await quoteStore.getQuoteById(+context.params?.id, {
        onFail: () => requestError.onGetCurrentQuote = 'Quote not found.'
    })

    return {
        props: {
            currentQuote: quoteStore.currentQuote || null,
            quotes: quoteStore.quotes || null,
            error: requestError
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: '1' } }
        ],
        fallback: true
    }
}

export default QuotesPage
