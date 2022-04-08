import { FC } from 'react'
import { CardWithActions, QuotesTable } from '../common-layout'
import { Paragraph } from '@atomic/shared'
import { useQueryQuote } from '@adapters/query'

export const AllQuotesView: FC = () => {
    const [{data, error, loading}, {refresh}] = useQueryQuote()

    return (
        <CardWithActions
            iconMain="Quote"
            title="All quotes"
            handleRefresh={refresh}
        >
            {loading ? <Paragraph>Loading quotes...</Paragraph> : null}
            {error ? <Paragraph>An error occourried on get quotes.</Paragraph> : null}
            {data?.quotes ?
                <QuotesTable
                    quotes={data.quotes}
                    fields={['Id', 'Name']}
                    shouldInteractive
                /> :
                null
            }
        </CardWithActions>
    )
}
