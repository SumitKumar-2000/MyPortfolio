import styled from "styled-components";

export const ThemeMode = styled.div`
    width: 100%;
    display: flex;
    padding: 2em 3em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .logo{
        font-size: 3em;
        cursor: pointer;
        color: #0284c7;
    }

    .themeIcon{
        width: 1.5em;
        height: 1.5em;
        cursor: pointer;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#000000" : "#f3f4f6"};
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        width: 768px;
    }
`