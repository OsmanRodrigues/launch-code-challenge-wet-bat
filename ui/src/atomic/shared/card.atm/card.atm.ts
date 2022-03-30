import styled from 'styled-components'
import {
    border,
    color,
    radius,
    shadow,
    size,
    spacing
} from '../constants'

export interface CardLayout {
    fluid?: boolean
    disableInteractivity?: boolean,
    isFocused?: boolean
}

export const CardStyled = styled.div<CardLayout>`
    width: ${props => props.fluid && size.general.fluid};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${color.light};
    border-radius: ${radius.lg};
    padding: ${spacing.padding.md};
    box-shadow: ${shadow.md} ${color.light};
    ${({ disableInteractivity, isFocused }) =>
        !disableInteractivity &&
        isFocused &&
        `
    border: ${border.card} ${color.primary};
    box-sizing: border-box;
    box-shadow: ${shadow.md} ${color.dark};
  `}
`
