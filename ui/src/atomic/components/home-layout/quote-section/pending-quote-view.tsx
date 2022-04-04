import { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { CardWithActions, QuotesTable } from '../../common-layout'
import { Paragraph } from '../../../shared/typography.atm'
import { QuoteStore, quoteStore } from '@domain/quote-domain/quote-store'

interface IPendingQuoteView {
    store?: QuoteStore
}

export const PendingQuoteView: FC<IPendingQuoteView> = observer(({ store = quoteStore }) => {
    const [getQuotesError, setGetQuotesError] = useState<{message: string}|null>(null)
    useEffect(() => {
        store.getQuotes({
            onFail: () => setGetQuotesError({ message: 'Failed to get pending quotes.' })
        }, true)
    }, [store])

    const handleRefresh = () => {
        setGetQuotesError(null)
        store.getQuotes({
            onFail: () => setGetQuotesError({ message: 'Failed to refresh pending quotes.' })
        })
    }

    return (
        <CardWithActions
            iconMain="Pending"
            title="Pending quotes"
            handleRefresh={handleRefresh}
        >
            {getQuotesError ? (
                <Paragraph>{getQuotesError.message} </Paragraph>
            ) : (
                <QuotesTable filter="pending" store={quoteStore} shouldInteractive />
            )}
        </CardWithActions>
    )
})
