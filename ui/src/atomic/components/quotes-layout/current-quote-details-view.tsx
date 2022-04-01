import { QuoteDataModel } from '@entities/quote'
import { FC } from 'react'
import { CardWithActions } from '../common-layout'

interface ICurrentQuoteDetailsView {
    quote: QuoteDataModel
}

export const CurrentQuoteDetailsView: FC<ICurrentQuoteDetailsView> = ({ quote }) => (
    <CardWithActions iconMain='Quote' title={`Quote ID: ${quote?.id || ''}`} >
        Quote infos here
    </CardWithActions>
)

