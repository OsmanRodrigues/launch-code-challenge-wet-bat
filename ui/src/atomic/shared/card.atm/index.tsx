import { FC, useState } from 'react'
import { CardLayout, CardStyled } from './card.atm'

export const Card: FC<CardLayout> =(props)=> {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <CardStyled
            {...props}
            isFocused={isFocused}
            onMouseDown={() => {
                setIsFocused(true)
            }}
            onMouseLeave={() => {
                if (isFocused) {
                    setIsFocused(false)
                }
            }}
        >
            {props.children}
        </CardStyled>
    )
}
