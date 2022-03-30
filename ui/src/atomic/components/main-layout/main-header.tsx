import { BrandLabel } from '@atomic/shared'
import { Header } from '@atomic/shared/layout.org'
import { FC } from 'react'

export const MainHeader: FC = () => (
    <Header>
        <BrandLabel color='light'>
            Wet Bat
        </BrandLabel>
    </Header>
)
