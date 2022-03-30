
import { Footer, H4, LinkButton, NavBar, Separator } from '../../shared'
import { appRoute } from '@utils/constants'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const MainNav: FC = () => {
    const { asPath: currentRoute } = useRouter()

    return (
        <NavBar>
            <LinkButton href={appRoute.main} active={currentRoute === appRoute.main} fluid>
                Home
            </LinkButton>
            <LinkButton href="/foo" active={currentRoute === '/foo'} fluid>
                Foo
            </LinkButton>
            <Footer>
                <Separator color='darkGray' outlined />
                <H4>
                    All rights reserved by Wet Bat @Inc.
                </H4>
            </Footer>
        </NavBar>
    )
}
