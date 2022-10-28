import styled from "styled-components";

export const TechStack = styled.div`
    padding-bottom: 3rem;
    width: 100%;
    margin: 0 auto;
    

    .techStackContainer{
        width: 100%;
        display: flex;
        justify-content: space-between;
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
        /* box-shadow: 0 20px 25px -5px #0000001a; */
        box-shadow: ${({theme}) => theme.colors.body === "#F9FAFB" ? "0 20px 25px -5px #0000001a" : "0 2px 5px 3px #dddddd"};
        background-color: #ffffff;
        margin: 2em;
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
    }
    
`