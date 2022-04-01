import { FC } from 'react'
import { Row, Col } from 'react-grid-system'
import { AllQuotesView } from './all-quotes-view'
import { CurrentQuoteDetailsView } from './current-quote-details-view'

export const QuotesDetaislSection: FC = () => (
    <>
        <Row aria-label="quotesDetailsSection" justify='around'>
            <Col sm={8}>
                <CurrentQuoteDetailsView />
            </Col>
            <Col sm={4}>
                <AllQuotesView />
            </Col>
        </Row>
    </>
)
