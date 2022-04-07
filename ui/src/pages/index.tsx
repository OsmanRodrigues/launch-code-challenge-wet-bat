import { QuoteSection } from '@atomic/components/home-layout'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils/constants'
import type { NextPage } from 'next'

const { home: homePage } = pageData

const Home: NextPage = () => {
    return (
        <>
            <Helmet title={homePage.title} description={homePage.description} />
            <QuoteSection />
        </>
    )
}

export default Home
