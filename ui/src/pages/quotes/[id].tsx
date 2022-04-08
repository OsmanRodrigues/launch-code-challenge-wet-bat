import { NextPage } from 'next'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils/constants'
import { QuotesDetaislSection } from '@atomic/components/quotes-layout'

const { quotes: quotesPage } = pageData

const QuotesPage: NextPage = () => (
    <>
        <Helmet title={quotesPage.title} description={quotesPage.description} />
        <QuotesDetaislSection />
    </>
)

export default QuotesPage
