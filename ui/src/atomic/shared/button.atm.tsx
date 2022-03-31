import Link, {LinkProps} from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { border, color, radius, spacing, typography } from './constants'

type ButtonType = 'callToAction' | 'icon'

interface ButtonSharedCss {
    fluid?: boolean,
    active?: boolean,
    rounded?: boolean,
    typeStyle?: ButtonType
}

const buttonSharedCss = css<ButtonSharedCss>`
    ${props => props.fluid && 'width: 100%; display: block;'};
    font-weight: ${typography.font.weight.lg};
    font-size: ${typography.font.size.md};
    text-align: center;
    text-decoration: none;
    border: none;
`
const callToActionCss = css<ButtonSharedCss>`
    background-color: ${color.primary};
    color: ${color.light};
    font-weight: ${typography.font.weight.lg};
    padding: ${spacing.padding.button.callToAction};
    border-radius: ${radius.button.callToAction};

    &:hover {
        border: ${border.button} ${color.primary};
        background-color: ${color.light};
        color: ${color.primary};
    }
`

export const iconButtonCss = css`
    background-color: inherit;
`

export const Button = styled.button<ButtonSharedCss>`
    ${buttonSharedCss}
    ${({ typeStyle }) =>{
        switch (typeStyle) {
        case 'callToAction':
            return callToActionCss
        case 'icon':
            return iconButtonCss
        }
    }}
`
const LinkAnchor = styled.a`
    ${buttonSharedCss}
    padding: ${spacing.padding.md};
    background-color: ${props => (props.active ? color.darkGray : color.gray)};

    &:hover {
        background-color: ${color.lightGray};
    }
`
export const LinkButton: FC<LinkProps&ButtonSharedCss> = ({ children, ...props }) => (
    <Link {...props}>
        <LinkAnchor fluid={props.fluid} active={props.active}>{children}</LinkAnchor>
    </Link>
)
