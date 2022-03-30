import Link, {LinkProps} from 'next/link'
import { FC } from 'react'
import styled, { css } from 'styled-components'
import { color, spacing, typography } from './constants'

interface ButtonSharedCss {
    fluid?: boolean,
    active?: boolean
}

const buttonSharedCss = css<ButtonSharedCss>`
    ${props => props.fluid && 'width: 100%; display: block;'};
    background-color: ${ props => props.active ? color.gray : color.lightGray};
    padding: ${spacing.padding.md};
    font-weight: ${typography.font.weight.lg};
    font-size: ${typography.font.size.md};
    text-align: center;
    text-decoration: none;

    &:active{
        background-color: ${color.gray};
    }
`
const LinkAnchor = styled.a`
    ${buttonSharedCss}
`

export const LinkButton: FC<LinkProps&ButtonSharedCss> = ({ children, ...props }) => (
    <Link {...props}>
        <LinkAnchor fluid={props.fluid} active={props.active}>{children}</LinkAnchor>
    </Link>
)
