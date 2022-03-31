import { FC } from 'react'
import { Col, Row } from 'react-grid-system'
import { PendingQuoteView } from './pending-quote-view'
import { QuickQuoteView } from './quick-quote-view'

export const QuoteSection: FC = () => {
    return (
        <Row aria-label='quotesSection'>
            <Col sm={6}>
                <QuickQuoteView/>
            </Col>
            <Col sm={6}>
                <PendingQuoteView/>
            </Col>
        </Row>
    )
}
