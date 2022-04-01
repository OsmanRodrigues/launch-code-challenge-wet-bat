import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils'
import { QuoteDataModel } from '@entities/quote'
import { IQuotesDetaislSection, QuotesDetaislSection } from '@atomic/components/quotes-layout'

const { quotes: quotesPage } = pageData

const QuotesPage: NextPage<IQuotesDetaislSection> = ({currentQuote, quotes}) =>  (
    <>
        <Helmet title={quotesPage.title} description={quotesPage.description} />
        <QuotesDetaislSection currentQuote={currentQuote} quotes={quotes}  />
    </>
)


export const getStaticProps: GetStaticProps<IQuotesDetaislSection> = async (context) => {

    const mockQuote: QuoteDataModel = {
        id: 1,
        statusCurrent: 'pending',
        peopleCount: 5,
        transportationType: 'bus',
        departureDate: '2004-10-19 10:23:54+02',
        departureLocation: 'recife',
        destinationLocation: 'sao paulo',
        peopleContact: 'me',
        priceFinal: 250.2,
        returnDate: '2004-10-20 10:23:54+02'
    }

    return {
        props: {
            currentQuote: mockQuote,
            quotes: [mockQuote]
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: '1' } }
        ],
        fallback: true // false or 'blocking'
    }
}

export default QuotesPage
