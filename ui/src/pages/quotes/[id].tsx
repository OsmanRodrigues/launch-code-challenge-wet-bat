import { createContext } from 'react'
import { enableStaticRendering } from 'mobx-react-lite'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils/constants'
import { QuoteDataModel } from '@entities/quote'
import { QuotesDetaislSection } from '@atomic/components/quotes-layout'
import { QuoteStore, quoteStore } from '@domain/quote-domain'
import { getRevalidateParams } from '@utils/get-revalidate-params'

enableStaticRendering(true)

const { quotes: quotesPage } = pageData

type IQuotesPageError = Record<'onGetQuotes' | 'onGetCurrentQuote', string | null>

export interface IQuotesPage {
    store?: QuoteStore,
    currentQuote: QuoteDataModel | null,
    quotes: QuoteDataModel[] | null,
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
> = async (contex) => {
    const requestError = { ...pageError }

    if (contex.params) {
        const { id, shouldRevalidate } = getRevalidateParams(contex.params.id)
        const getQuoteCall = quoteStore.getQuoteById(id, {
            onFail: () => (requestError.onGetCurrentQuote = 'Quote not found.')
        })
        const getQuoteListCall = quoteStore.getQuotes({
            onFail: () => requestError.onGetCurrentQuote = 'Failed to get quotes table.'
        }, !shouldRevalidate)
        await Promise.all([
            getQuoteCall,
            getQuoteListCall
        ])
    }

    return {
        props: {
            currentQuote: quoteStore.currentQuote || null,
            quotes: quoteStore.quotes || null,
            error: requestError
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on posts
    //const paths = posts.map(post => ({
    //    params: { id: post.id }
    //}))

    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return {
        paths: [{ params: { id: '1' } }],
        fallback: true
    }
}

export default QuotesPage
