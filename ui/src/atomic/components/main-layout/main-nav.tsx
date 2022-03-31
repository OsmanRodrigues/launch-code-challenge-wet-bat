
import { Footer, H4, Icon, Label, LinkButton, NavBar, Separator } from '../../shared'
import { appRoute } from '@utils/constants'
import { useRouter } from 'next/router'
import { FC } from 'react'

export const MainNav: FC = () => {
    const { asPath: currentRoute } = useRouter()

    return (
        <NavBar>
            <LinkButton href={appRoute.main} active={currentRoute === appRoute.main} fluid>
                <Icon.Home />
                <Label>
                        Home
                </Label>
            </LinkButton>
            <LinkButton href={appRoute.quotes} active={currentRoute === appRoute.quotes} fluid>
                <Icon.Quote />
                <Label>
                    Quotes
                </Label>
            </LinkButton>
            <Footer>
                <Separator color='darkGray' outlined />
                <H4 color='darkGray'>
                    All rights reserved by Wet Bat @Inc.
                </H4>
            </Footer>
        </NavBar>
    )
}
