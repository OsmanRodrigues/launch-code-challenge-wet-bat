import { Refresh } from '@styled-icons/boxicons-regular'
import styled from 'styled-components'
import { color } from './constants'

export const Icon = {
    Refresh: styled(Refresh).attrs({size: '2rem'})`
        color: ${color.darkGray};
    `
}
