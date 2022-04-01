import { NextPage } from 'next'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils'

const {quotes: quotesPage} = pageData

const QuotesPage: NextPage = () => (
    <>
        <Helmet title={quotesPage.title} description={quotesPage.description}/>
        <h1>Quotes details page</h1>
    </>
)

export default QuotesPage
