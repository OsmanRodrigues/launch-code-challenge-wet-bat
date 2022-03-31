import { FC } from 'react'
import { Col, Container, Row } from 'react-grid-system'
import { MainHeader } from './main-header'
import { MainNav } from './main-nav'

export const MainLayout: FC = ({ children: app }) => {

    return (
        <>
            <MainHeader/>
            <Container fluid>
                <Row>
                    <Col sm={2} md={1} style={{padding: '0px'}}>
                        <MainNav />
                    </Col>
                    <Col>
                        {app}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
