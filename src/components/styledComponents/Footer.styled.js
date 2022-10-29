import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    .socialBox{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        border-radius: 100%;
        margin: 0 1em;
        box-shadow: 0 20px 25px -5px #0000001a;
        background-color: #FFFFFF;
    }
    .socialIcon{
        cursor: pointer;
        width: 2em;
        height: 2em;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        width: 768px
    }
`