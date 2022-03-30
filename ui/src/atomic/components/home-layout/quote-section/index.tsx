import { Card } from '../../../shared'
import { FC } from 'react'
import { Col, Row } from 'react-grid-system'
import { PendingQuoteView } from './pending-quote-view'

export const QuoteSection: FC = () => {
    return (
        <Row aria-label='quotesSection'>
            <Col sm={4}>
                <Card disableInteractivity>
                    quote form
                </Card>
            </Col>
            <Col sm={8}>
                <PendingQuoteView />
            </Col>
        </Row>
    )
}
