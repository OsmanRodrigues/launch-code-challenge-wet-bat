import { FC, useContext, useState } from 'react'
import { QuotesPageContext } from 'pages/quotes/[id]'
import { CardWithActions, QuotesTable } from '../common-layout'
import { useRevalidateISR } from '../../hooks/revalidate-hook'
import { Paragraph } from '../../shared'

export const AllQuotesView: FC = () => {
    const [revalidateError, setRevalidateError] = useState<{message?: string}|null>(null)
    const { quotes, error: quotesTableError } = useContext(QuotesPageContext)
    const hasTableError = quotesTableError.onGetQuotes
    const { revalidate } = useRevalidateISR({
        onFail: () => setRevalidateError({
            message: 'Failed to refresh list.'
        })
    })

    const handleRevalidate = () => {
        setRevalidateError(null)
        revalidate()
    }

    return (
        <CardWithActions
            iconMain="Quote"
            title="All quotes"
            handleRefresh={handleRevalidate}
        >
            {revalidateError ? (
                <Paragraph color="fail">{revalidateError.message}</Paragraph>
            ) : null}
            {hasTableError ?
                <Paragraph color="fail">{quotesTableError.onGetQuotes}</Paragraph> :
                <QuotesTable
                    quotes={quotes}
                    fields={['Id', 'Name']}
                    shouldInteractive
                />
            }
        </CardWithActions>
    )
}
