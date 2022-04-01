import { H4 } from '@atomic/shared/typography.atm'
import { quoteStore } from '@domain/quote-domain/quote-store'
import { observer } from 'mobx-react-lite'
import { QuotesTable } from '../../common-layout/quotes-table'

export const PendingQuoteTable = observer(() => (
    quoteStore.pendingQuotes?.length ?
        <QuotesTable quotes={quoteStore.pendingQuotes} /> :
        <H4>No data.</H4>
))
