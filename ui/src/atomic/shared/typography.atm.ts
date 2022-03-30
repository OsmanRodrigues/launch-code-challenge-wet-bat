import styled, { css } from 'styled-components'
import { color, spacing, typography } from './constants'

interface TypographySharedCss {
    color?: keyof typeof color
    size?: keyof typeof typography.font.size
}

const typographySharedCss = css<TypographySharedCss>`
    background-color: inherit;
    color: ${props => color[props.color || 'dark']};
`
export const H1 = styled.h1`
    ${typographySharedCss}
`
export const H2 = styled.h2`
    ${typographySharedCss}
`
export const BrandLabel = styled.label`
    ${typographySharedCss}
    font-size: ${props => typography.font.size[props.size || 'md']};
    font-weight: ${typography.font.weight.lg};
    padding: 0px ${spacing.padding.md};
`
