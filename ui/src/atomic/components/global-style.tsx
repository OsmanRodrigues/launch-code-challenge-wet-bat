import { color, typography } from '@atomic/shared/constants'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: ${typography.root.fontSize};
        font-weight: ${typography.root.fontWeight};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${typography.font.family};
        color: ${color.dark};
        background-color: ${color.light};
    }
`
