import styled from "styled-components";

export const StyledHeader = styled.header`
    padding : 2em 0;
    margin: auto;
    width: 768px;
`

export const HeaderDetailContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 2rem auto;
    padding: 1.25rem;

    p{
        font-size: 1.2em;
        text-align: center;
        letter-spacing: 2px;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#374151" : "#9CA3AF"};
        line-height: 30px;
        font-family: 'Raleway', sans-serif;
        padding: 0 2em;
    }

    h1{
        background: linear-gradient(132deg, rgb(2 132 199 / 90%) 40%, #20c7c7 65%);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        font-size: 3.5em;
        margin: 0.3rem 0 ;
        font-family: 'Montserrat', sans-serif;
        text-align: center; 
    }

    a{
        text-decoration: none;
        color: #ffffff;
    }

    div{
        font-weight: 800;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#6B7280" : "#9CA3AF"};
        font-size: 1em;
        letter-spacing: 4px;
        text-align: center;
        margin-bottom: 1rem;
        font-family: 'Raleway', sans-serif;
    }


    /* #6B7280 */
`

