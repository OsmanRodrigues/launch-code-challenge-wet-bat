import styled from 'styled-components'
import { size } from '../../constants'
import { LayoutPosition } from '../../types'

export interface BoxLayout {
    fluid?: boolean
    horizontal?: boolean
    grow?: number
    position?: LayoutPosition
}

export const BoxStyled = styled.div<BoxLayout>`
    width: ${props => props.fluid && size.general.fluid};
    display: flex;
    flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
    flex-grow: ${props => props.grow || 1};
    ${({ horizontal, position }) =>
        position &&
        `
    ${horizontal ? 'justify-content' : 'align-self'}: ${position};
  `}
`
