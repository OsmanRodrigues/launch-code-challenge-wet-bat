import { GlobalStyle } from '@atomic/components/global-style'
import { MainLayout } from '@atomic/components/main-layout'
import type { AppProps } from 'next/app'
import { setConfiguration } from 'react-grid-system'

setConfiguration({ defaultScreenClass: 'sm', gridColumns: 12 })

function MyApp({ Component, pageProps }: AppProps) {

    return (
        <>
            <GlobalStyle />
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </>
    )
}

export default MyApp
