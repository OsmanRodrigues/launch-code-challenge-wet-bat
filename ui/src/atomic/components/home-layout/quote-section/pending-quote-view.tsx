import { H4 } from '../../../shared/typography.atm'
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { quoteStore } from '@domain/quote-domain/quote-store'
import { PendingQuoteTable } from './pending-quote-table'
import { QuoteView } from './quote-view'

export const PendingQuoteView: FC = observer(() => {
    const hasData = !!quoteStore.quotes?.length

    useEffect(() => {
        quoteStore.getQuotes(undefined, true)
    }, [])

    return (
        <QuoteView iconMain='Pending' title="Pending quotes" handleRefresh={quoteStore.getQuotes}>
            {hasData ? <PendingQuoteTable /> : <H4>No pending quotes info.</H4>}
        </QuoteView>
    )
})
