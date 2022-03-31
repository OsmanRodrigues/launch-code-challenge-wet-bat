import styled, { css } from 'styled-components'
import { color, spacing, typography } from '../constants'
import { Box } from '../layout.org'

const inputResetCss = css`
    border: none;
    outline: none;
`
interface InputLayout {
    fluid?: boolean
}

export const Form = styled.form`
`
export const InputWrapper = styled(Box)`
    background-color: ${color.lightGray};
    padding: ${spacing.padding.sm};
    label{
        text-transform: uppercase;
        color: ${color.darkGray};
        font-weight: ${typography.font.weight.md};
        font-size: 0.8rem;
    }
`
export const Input = styled.input<InputLayout>`
    ${inputResetCss}
    background-color: inherit;
`
