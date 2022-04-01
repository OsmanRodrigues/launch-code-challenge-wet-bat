import { QuoteSection } from '@atomic/components/home-layout'
import { Helmet } from '@atomic/components/main-layout/main-helmet'
import { pageData } from '@utils'
import type { NextPage } from 'next'

const { main: homePage } = pageData

const Home: NextPage = () => {

    return (
        <>
            <Helmet title={homePage.title} description={homePage.description}/>
            <QuoteSection />
        </>
    )
}

export default Home
