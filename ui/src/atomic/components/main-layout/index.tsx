import { FC } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { MainHeader } from './main-header'
import { MainNav } from './main-nav'

export const MainLayout: FC = ({ children: app }) => {

    return (
        <Container fluid>
            <Row style={{border: '1px solid black'}}>
                <MainHeader/>
            </Row>
            <Row>
                <Col md={1} style={{border: '1px solid blue'}}>
                    <MainNav />
                </Col>
                <Col style={{border: '1px solid blue'}}>
                    {app}
                </Col>
            </Row>
        </Container>
    )
}
