import styled from "styled-components";

export const TechStack = styled.div`
    padding-bottom: 3rem;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px solid #88909B;

    h1{
        font-weight: 800;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#000000" : "#f3f4f6"};
        font-size: 2.5em;
        margin: 0 0 1rem 1.4em;
    }

    .techStackContainer{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;
    }
    
    .technology{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 6em;
        height: 6em;
        padding: 20px;
        border-radius: 50%;
        box-shadow: 0 20px 25px -5px #0000001a;
        cursor: pointer;
        background-color: #ffffff;
        margin: 1rem 2em;
    }

    
    img{
        width: 100%;
    }
    
    @media(max-width: ${({theme})=> theme.tab}){
        width: 768px;
        margin: auto;

        .techStackContainer{
            width: 96%;
            margin: auto;
        }

        .technology{
            margin: 1em;
            width: 4.5em;
            height: 4.5em;
        }

        h1{
            margin: 0 0 1rem 0;
            text-align: center;
        }
    }
    
`