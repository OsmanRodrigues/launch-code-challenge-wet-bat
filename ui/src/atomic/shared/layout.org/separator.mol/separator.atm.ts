import styled, { css } from 'styled-components'
import { border, color, size, spacing } from '../../constants'

export interface SeparatorLayout {
    vertical?: boolean
    large?: boolean
    outlined?: boolean
}

const verticalSeparatorBaseCss = css`
    display: inline-block;
    width: ${size.separator.vertical.md.width};
    height: ${size.separator.vertical.md.height};
    margin: ${spacing.margin.separator.vertical.md};
    *:first-child {
        border-right: ${border.separator} ${color.darkGray};
        width: 100%;
        height: 100%;
    }
`
const verticalSeparatorLargeCss = css`
    height: ${size.separator.vertical.lg.height};
`
const horizontalSeparatorBaseCss = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${spacing.margin.separator.horizontal.md};
    *:first-child {
        border-bottom: ${border.separator} ${color.gray};
        width: 100%;
    }
`
const horizontalSeparatorLargeCss = css`
    margin: ${spacing.margin.separator.horizontal.lg};
`
export const SeparatorStyled = styled.div<SeparatorLayout>`
    ${({ vertical, large }) => css`
        ${vertical ? verticalSeparatorBaseCss : horizontalSeparatorBaseCss}
        ${large
        ? vertical
            ? verticalSeparatorLargeCss
            : horizontalSeparatorLargeCss
        : ''}
    `}
`
export const SeparatorStrawStyled = styled.div<SeparatorLayout>`
    ${props => !props.outlined && 'border: none !important;'}
`
