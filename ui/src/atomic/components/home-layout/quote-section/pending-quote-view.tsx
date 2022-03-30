import {
    Box,
    Card,
    H2,
    H4,
    Separator,
} from '../../../shared'
import { FC, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { quoteListStore } from '@domain/quote-domain/quote-store'
import { PendingQuoteTable } from './pending-quote-table'

export const PendingQuoteView: FC = observer(() => {
    const hasData = !!quoteListStore.quotes?.length

    useEffect(() => {
        quoteListStore.getQuotes(undefined, true)
    }, [])

    return (
        <Card disableInteractivity fluid>
            <Box fluid>
                <H2 color="secondary">Pending quotes</H2>
                <Separator outlined />
                {hasData ? (
                    <PendingQuoteTable />
                ) : (
                    <H4>No pending quotes info.</H4>
                )}
            </Box>
        </Card>
    )
})
