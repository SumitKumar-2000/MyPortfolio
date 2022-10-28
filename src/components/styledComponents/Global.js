import { createGlobalStyle } from "styled-components"

const GlobalStyles  = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    body{
        background: ${({theme}) => theme.colors.body};
        transition: all 0.5s 0s ease;
        /* font-family: 'Raleway', sans-serif; */
    }

`

export default GlobalStyles