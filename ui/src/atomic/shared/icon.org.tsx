import styled from 'styled-components'
import { color } from './constants'
import { Dollar } from '@styled-icons/boxicons-regular/Dollar'
import { Refresh } from '@styled-icons/boxicons-regular/Refresh'
import { Hourglass } from '@styled-icons/boxicons-solid/Hourglass'
import { Dashboard } from '@styled-icons/boxicons-solid/Dashboard'
import { FastForwardCircle } from '@styled-icons/boxicons-regular/FastForwardCircle'
import { Home } from '@styled-icons/boxicons-solid/Home'


export const Icon = {
    Dashboard: styled(Dashboard).attrs({ size: '2.5rem' })`
        color: ${color.light};
        `,
    Home: styled(Home).attrs({ size: '2rem' })`
        color: ${color.secondary};
        `,
    Quote: styled(Dollar).attrs({ size: '2rem' })`
        color: ${color.secondary};
        `,
    Refresh: styled(Refresh).attrs({ size: '2rem' })`
        color: ${color.darkGray};
    `,
    Fastfoward: styled(FastForwardCircle).attrs({ size: '2rem' })`
        color: ${color.primary};
    `,
    Pending: styled(Hourglass).attrs({ size: '2rem' })`
        color: ${color.primary};
    `,
}
