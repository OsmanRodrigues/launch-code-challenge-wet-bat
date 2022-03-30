import { BrandLabel } from '@atomic/shared'
import { Header } from '@atomic/shared/layout'
import { FC } from 'react'

export const MainHeader: FC = () => (
    <Header>
        <BrandLabel color='light' size='xl'>
            Wet Bat
        </BrandLabel>
    </Header>
)
