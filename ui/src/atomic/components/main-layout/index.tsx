import { FC } from 'react'
import { Container, Row } from 'react-grid-system'
import { AppPageCol, NavCol } from './main-columns'
import { MainHeader } from './main-header'
import { MainNav } from './main-nav'

export const MainLayout: FC = ({ children: app }) => {

    return (
        <>
            <MainHeader />
            <Container fluid>
                <Row>
                    <NavCol sm={2} md={2} lg={1}>
                        <MainNav />
                    </NavCol>
                    <AppPageCol>
                        {app}
                    </AppPageCol>
                </Row>
            </Container>
        </>
    )
}
