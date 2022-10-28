import styled from "styled-components";

export const OceanText = styled.h1`
    background: linear-gradient(132deg, rgb(2 132 199 / 90%) 40%, #20c7c7 65%);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    font-size: 3.5em;
    margin: 3rem 0 ;
    font-family: 'Montserrat', sans-serif;
    text-align: center;  

    @media(max-width: ${({theme}) => theme.tab}){
        font-size: 2.5em;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        font-size: 2.5em;
    }

`

