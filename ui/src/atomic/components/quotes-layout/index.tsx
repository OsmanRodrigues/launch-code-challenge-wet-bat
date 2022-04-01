import { QuoteDataModel } from '@entities/quote'
import { FC } from 'react'
import { Row, Col } from 'react-grid-system'
import { AllQuotesView } from './all-quotes-view'
import { CurrentQuoteDetailsView } from './current-quote-details-view'

export interface IQuotesDetaislSection {
    currentQuote: QuoteDataModel,
    quotes: QuoteDataModel[]
}

export const QuotesDetaislSection: FC<IQuotesDetaislSection> = ({
    currentQuote,
    quotes
}) => (
    <>
        <Row aria-label="quotesDetailsSection" justify='around'>
            <Col sm={8}>
                <CurrentQuoteDetailsView quote={currentQuote} />
            </Col>
            <Col sm={4}>
                <AllQuotesView quotes={quotes} />
            </Col>
        </Row>
    </>
)
