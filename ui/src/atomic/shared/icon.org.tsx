import styled, { css } from 'styled-components'
import { color, size } from './constants'
import { Dollar } from '@styled-icons/boxicons-regular/Dollar'
import { Refresh } from '@styled-icons/boxicons-regular/Refresh'
import { Hourglass } from '@styled-icons/boxicons-solid/Hourglass'
import { Dashboard } from '@styled-icons/boxicons-solid/Dashboard'
import { FastForwardCircle } from '@styled-icons/boxicons-regular/FastForwardCircle'
import { Home } from '@styled-icons/boxicons-solid/Home'

export interface IconSharedCss {
    color?: keyof typeof color
}

const iconSharedCss = css<IconSharedCss>`
    color: ${props => props.color ? color[props.color] : 'inherit'}
`

export const Icon = {
    Dashboard: styled(Dashboard).attrs({ size: size.icon.lg })`
        ${iconSharedCss}
    `,
    Home: styled(Home).attrs({ size: size.icon.md })`
        ${iconSharedCss}
    `,
    Quote: styled(Dollar).attrs({ size: size.icon.md })`
        ${iconSharedCss}
    `,
    Refresh: styled(Refresh).attrs({ size: size.icon.md })`
        ${iconSharedCss}
    `,
    Fastfoward: styled(FastForwardCircle).attrs({ size: size.icon.md })`
        ${iconSharedCss}
    `,
    Pending: styled(Hourglass).attrs({ size: size.icon.md })`
        ${iconSharedCss}
    `,
}
