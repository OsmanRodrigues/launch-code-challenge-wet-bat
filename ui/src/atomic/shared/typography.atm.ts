import styled, { css } from 'styled-components'
import { color, spacing, typography } from './constants'

interface TypographySharedCss {
    color?: keyof typeof color
}
const typographySharedCss = css<TypographySharedCss>`
    color: ${props => color[props.color || 'dark']};
`
export const H1 = styled.h1`
    ${typographySharedCss}
`
export const H2 = styled.h2`
    ${typographySharedCss}
`
export const H3 = styled.h3`
    ${typographySharedCss}
`
export const H4 = styled.h4`
    ${typographySharedCss}
`
export const BrandLabel = styled.label`
    ${typographySharedCss}
    font-size: ${typography.font.size.xxl};
    font-weight: ${typography.font.weight.lg};
    padding: 0px ${spacing.padding.md};
`
export const Label = styled.label`
    ${typographySharedCss}
`
