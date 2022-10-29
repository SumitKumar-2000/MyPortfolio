import styled from "styled-components";

export const StyledAbout = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem auto;

    div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: flex-start;
        padding: 1rem 3rem;

        .country{
            background: linear-gradient(132deg,#eb8f0cf2 35%,#16cd70 82%);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    }

    h1{
        font-weight: 800;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#000000" : "#f3f4f6"};
        font-size: 2.5em;
        margin: 0 0 1rem 0;
    }
    
    p{
        font-size: 1.2em;
        line-height: 30px;
        letter-spacing: 1px;
        text-align:start;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#000000" : "#f3f4f6"};
    }

    @media(max-width: ${({theme}) => theme.tab}){
        flex-direction: column-reverse;
        div,p{
            text-align: center;
            align-items: center;
        }
    }
    
    @media(max-width: ${({theme}) => theme.mobile}){
        width : 768px;
    }

`
export const ImageContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        border-radius: 8px 154px 78px 78px;
        height: 28em;
        width: 20em;
        box-shadow: 0 25px 50px -2px rgb(0 0 0 / 0.30);
    }

    @media(max-width: ${({theme}) => theme.tab}){
        width: 80%;
        margin: auto;
    }
`