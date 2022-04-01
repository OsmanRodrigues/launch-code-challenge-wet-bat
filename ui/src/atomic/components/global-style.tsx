import { color, size, typography } from '../shared/constants'
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

        ::-webkit-scrollbar {
        width:${size.scroll};
        }

        ::-webkit-scrollbar-track {
        background: ${color.lightGray};
        }

        ::-webkit-scrollbar-thumb {
            background: ${color.gray};
        }

        ::-webkit-scrollbar-thumb:hover {
        background: ${color.darkGray};
        }
    }

    body {
        background-color: ${color.lightGray};
    }
`
