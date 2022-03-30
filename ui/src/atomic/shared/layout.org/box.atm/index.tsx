import { FC } from 'react'
import { BoxLayout, BoxStyled } from './box.atm'

export const Box: FC<BoxLayout> = (props) => (
    <BoxStyled {...props}>{props.children}</BoxStyled>
)


