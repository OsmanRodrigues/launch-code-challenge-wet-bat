import { FC, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { CardWithActions, QuotesTable } from '../../common-layout'
import { Paragraph } from '../../../shared/typography.atm'
import { quoteStore } from '@domain/quote-domain/quote-store'

export const PendingQuoteView: FC = observer(() => {
    const [getQuotesError, setGetQuotesError] = useState<{message: string}|null>(null)
    useEffect(() => {
        quoteStore.getQuotes({
            onFail: () => setGetQuotesError({ message: 'Failed to get pending quotes.' })
        }, true)
    }, [])

    const handleRefresh = () => {
        setGetQuotesError(null)
        quoteStore.getQuotes({
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
                <QuotesTable filter="pending" shouldInteractive />
            )}
        </CardWithActions>
    )
})
