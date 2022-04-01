import styled, { css } from 'styled-components'
import { color, size, spacing, typography } from './constants'

interface TypographySharedCss {
    color?: keyof typeof color,
    fluid?: boolean,
    isBolded?: boolean
}
const typographySharedCss = css<TypographySharedCss>`
    color: ${props => color[props.color || 'dark']};
    font-weight: ${props => (props.isBolded ? 'bold' : 'normal')};
`
const descriptionListSharedStyle = css`
    line-height: ${typography.font.lineHeight.dl};
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
    color: inherit;
`
export const Paragraph = styled.p`
    ${typographySharedCss}
    line-height: ${typography.font.lineHeight.p};
`
export const DL = styled.dl`
    ${typographySharedCss}
    ${descriptionListSharedStyle}
    width: ${props => props.fluid && size.general.fluid};
    margin: ${props => props.fluid && '0px'};
`

export const DD = styled.dd`
    ${typographySharedCss}
    ${descriptionListSharedStyle}
`

export const DT = styled.dt`
    ${typographySharedCss}
    ${descriptionListSharedStyle}
`
