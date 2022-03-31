import { H4 } from '../../../shared/typography.atm'
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { quoteListStore } from '@domain/quote-domain/quote-store'
import { PendingQuoteTable } from './pending-quote-table'
import { QuoteView } from './quote-view'

export const PendingQuoteView: FC = observer(() => {
    const hasData = !!quoteListStore.quotes?.length

    useEffect(() => {
        quoteListStore.getQuotes(undefined, true)
    }, [])

    return (
        <QuoteView title="Pending quotes">
            {hasData ? <PendingQuoteTable /> : <H4>No pending quotes info.</H4>}
        </QuoteView>
    )
})
