import { FC } from 'react'
import { CardWithActions, QuotesTable } from '../../common-layout'
import { Paragraph } from '../../../shared/typography.atm'
import { useQueryQuote } from '@adapters/query'

export const PendingQuoteView: FC = () => {
    const [{ data, error, loading }, { refresh }] = useQueryQuote('filter=pending')

    return (
        <CardWithActions
            iconMain="Pending"
            title="Pending quotes"
            handleRefresh={refresh}
        >
            {loading ? <Paragraph>Loading data...</Paragraph> : null}
            {error ? <Paragraph>{error.message}</Paragraph> : null}
            {data ? <QuotesTable quotes={data.quotes} shouldInteractive /> : null}
        </CardWithActions>
    )
}
