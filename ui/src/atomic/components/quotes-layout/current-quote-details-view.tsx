import { Paragraph } from '@atomic/shared'
import { QuoteDataModel } from '@entities/quote'
import { FC } from 'react'
import { CardWithActions } from '../common-layout'
import { CurrentQuoteDetailsCard } from './current-quote-details-card'

interface ICurrentQuoteDetailsView {
    quote: QuoteDataModel
}

export const CurrentQuoteDetailsView: FC<ICurrentQuoteDetailsView> = ({ quote }) => (
    <CardWithActions iconMain="Quote" title={`Quote ID: ${quote?.id || ''}`}>
        {quote ? <CurrentQuoteDetailsCard quote={quote} /> :
            <Paragraph>No detailed data. Select one in all quotes</Paragraph>
        }
    </CardWithActions>
)

