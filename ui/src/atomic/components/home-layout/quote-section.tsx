import { Card } from '@atomic/shared'
import { FC } from 'react'
import { Col, Row } from 'react-grid-system'

export const QuoteSection: FC = () => {
    return (
        <Row>
            <Col>
                <Card disableInteractivity>
                    quote form
                </Card>
            </Col>
            <Col>
                <Card disableInteractivity>
                    quote list view
                </Card>
            </Col>
        </Row>
    )
}
