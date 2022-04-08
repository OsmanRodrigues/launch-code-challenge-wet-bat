import { FC } from 'react'
import { BrandLabel, Icon } from '../../shared'
import { Header } from '../../shared/layout.org'

export const MainHeader: FC = () => (
    <Header>
        <Icon.Dashboard color='light'/>
        <BrandLabel color='light'>
            Wet Bat
        </BrandLabel>
    </Header>
)
