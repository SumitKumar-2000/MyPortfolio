import styled from "styled-components";

export const ThemeMode = styled.div`
    width: 100%;
    display: flex;
    padding: 2em 3em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    color: #0284c7;

    .themeIcon{
        font-size: 3em
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        width: 768px;
    }
`