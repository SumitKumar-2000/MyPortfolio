import { createGlobalStyle } from "styled-components"

const GlobalStyles  = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.colors.body};
        transition: all 0.5s 0s ease;
    }

`

export default GlobalStyles