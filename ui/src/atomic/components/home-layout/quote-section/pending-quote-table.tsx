import { Paragraph } from '@atomic/shared/typography.atm'
import { quoteStore } from '@domain/quote-domain/quote-store'
import { observer } from 'mobx-react-lite'
import { QuotesTable } from '../../common-layout/quotes-table'

export const PendingQuoteTable = observer(() => (
    quoteStore.pendingQuotes?.length ?
        <QuotesTable quotes={quoteStore.pendingQuotes} shouldInteractive/> :
        <Paragraph>No data.</Paragraph>
))
