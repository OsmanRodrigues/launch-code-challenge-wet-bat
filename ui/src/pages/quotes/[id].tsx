import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils'

const { quotes: quotesPage } = pageData

const QuotesPage: NextPage = (props) => {
    console.log('on the page', props)

    return (
        <>
            <Helmet title={quotesPage.title} description={quotesPage.description} />
            <h1>Quotes details page</h1>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    console.log('on static props', context)

    return {
        props: {
            test: 'test'
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
