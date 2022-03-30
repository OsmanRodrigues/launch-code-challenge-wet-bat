import styled from 'styled-components'
import { color, radius, spacing } from '../constants'

export const Header = styled.header`
    background-color: ${color.secondary};
    height: 4rem;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
`
export const Footer = styled.footer`
    padding: ${spacing.padding.md};
    background-color: inherit;
    position: absolute;
    bottom: 0;
`
export const NavBar = styled.nav`
    background-color: ${color.lightGray};
    min-height: 60vh;
    border-radius: ${radius.md};
`
