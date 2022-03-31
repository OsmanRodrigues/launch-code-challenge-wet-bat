import React, { FC } from 'react'
import { SeparatorLayout, SeparatorStrawStyled, SeparatorStyled } from './separator.atm'

export const Separator: FC<SeparatorLayout> = props => {
    return (
        <SeparatorStyled {...props}>
            <SeparatorStrawStyled outlined={props?.outlined} />
        </SeparatorStyled>
    )
}
