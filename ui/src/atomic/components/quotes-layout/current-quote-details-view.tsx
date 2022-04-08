import { FC, useContext } from 'react'
import { QuotesPageContext } from 'pages/quotes/[id]'
import { Paragraph } from '../../shared/typography.atm'
import { CurrentQuoteDetailsCard } from './current-quote-details-card'
import { CardWithActions } from '../common-layout'
import { QuoteDataModel } from '@entities/quote'

interface ICurrentQuoteDetailsView {
    quote?: QuoteDataModel
}


export const CurrentQuoteDetailsView: FC<ICurrentQuoteDetailsView> = () => {
    const { currentQuote, error } = useContext(QuotesPageContext)

    const hasError = error?.onGetCurrentQuote

    return (
        <CardWithActions iconMain="Quote" title={`Quote ID: ${currentQuote?.id || ''}`}>
            {hasError ?
                <Paragraph>
                    {error.onGetCurrentQuote}
                </Paragraph> :
                currentQuote ?
                    <CurrentQuoteDetailsCard quote={currentQuote} /> :
                    <Paragraph> No detailed data. Select one in all quotes </Paragraph>
            }

        </CardWithActions>
    )
}

