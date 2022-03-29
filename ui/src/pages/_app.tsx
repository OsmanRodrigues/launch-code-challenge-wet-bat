import { GlobalStyle } from '@atomic'
import type { AppProps } from 'next/app'
import { setConfiguration } from 'react-grid-system'

setConfiguration({ defaultScreenClass: 'sm', gridColumns: 12 })

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle/>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
