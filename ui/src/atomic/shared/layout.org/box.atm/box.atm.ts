import styled from 'styled-components'
import { fieldsetReset, size } from '../../constants'
import { LayoutPosition } from '../../types'

export interface BoxLayout {
    as?: any
    form?: string
    name?: string
    fluid?: boolean
    horizontal?: boolean
    grow?: number
    position?: LayoutPosition
}

const fluidAndGrowErrorMsg = 'No grow and fluid prop at same time in Box component.'

export const BoxStyled = styled.div<BoxLayout>`
    ${({ grow, fluid}) => {
        if (grow && fluid) throw new Error(`${fluidAndGrowErrorMsg} ${BoxStyled.toString()}`)
        return ''
    }}
    ${({ as }) => as === 'fieldset' && fieldsetReset}
    width: ${props => props.fluid && size.general.fluid};
    display: flex;
    flex-direction: ${props => (props.horizontal ? 'row' : 'column')};
    //flex-grow: ${props => props.grow || 1};
    ${({ horizontal, position }) =>
        position &&
        `
        ${horizontal ? 'justify-content' : 'align-self'}: ${position};
    `}
`
