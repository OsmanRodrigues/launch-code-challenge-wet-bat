
import { FC } from 'react'
import { useRouter } from 'next/router'
import { appRoute } from '@utils/constants'
import { Footer, Paragraph, Icon, LinkButton, NavBar, Separator } from '../../shared'

export const MainNav: FC = () => {
    const { asPath: currentRoute } = useRouter()

    return (
        <NavBar>
            <LinkButton
                href={appRoute.home}
                active={currentRoute === appRoute.home}
                replace
                fluid
            >
                <Icon.Home />
                Home
            </LinkButton>
            <LinkButton
                href={`${appRoute.quotes}/[id]`}
                as={`${appRoute.quotes}/1`}
                active={currentRoute.startsWith(appRoute.quotes)}
                replace
                fluid
            >
                <Icon.Quote />
                Quotes
            </LinkButton>
            <Footer>
                <Separator color="darkGray" outlined />
                <Paragraph color="darkGray">
                    All rights reserved by Wet Bat @Inc.
                </Paragraph>
            </Footer>
        </NavBar>
    )
}
