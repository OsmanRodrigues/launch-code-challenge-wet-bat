import styled, { css } from 'styled-components'
import { color, radius, spacing } from '../constants'
import { LayoutAlign } from '../types'

export const Header = styled.header`
    background-color: ${color.secondary};
    height: 4rem;
    padding: ${spacing.padding.md};
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
`
export const Footer = styled.footer`
    padding: ${spacing.padding.md};
    position: absolute;
    bottom: 0;
`
export const NavBar = styled.nav`
    background-color: ${color.gray};
    min-height: 80vh;
    border-radius: ${radius.md};
`
interface TableLayout {
    align?: LayoutAlign,
    color?: keyof typeof color,
    backgroundColor?: keyof typeof color
}
const tableSharedCss = css<TableLayout>`
    ${props => props.color && `color:${props.color};`};
    background-color: ${props => props.backgroundColor || 'inherit'};
    text-align: inherit;
`
export const Table = styled.table`
    ${tableSharedCss}
    text-align: ${props => props.align || 'left'};
`
export const TableHeaders = styled.thead`
    ${tableSharedCss}
`
export const TableBody = styled.tbody`
    ${tableSharedCss}
`
export const TableRow = styled.tr`
    ${tableSharedCss}
`
export const TableHead = styled.th`
    ${tableSharedCss}
`
export const TableData = styled.td`
    ${tableSharedCss}
`
