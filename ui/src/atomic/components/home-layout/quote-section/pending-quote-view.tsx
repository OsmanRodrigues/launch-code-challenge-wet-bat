import { H4 } from '../../../shared/typography.atm'
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { quoteStore } from '@domain/quote-domain/quote-store'
import { PendingQuoteTable } from './pending-quote-table'
import { CardWithActions } from '../../common-layout'

export const PendingQuoteView: FC = observer(() => {
    useEffect(() => {
        quoteStore.getQuotes(undefined, true)
    }, [])

    return (
        <CardWithActions iconMain='Pending' title="Pending quotes" handleRefresh={quoteStore.getQuotes}>
            <PendingQuoteTable />
        </CardWithActions>
    )
})
