import styled from "styled-components";

export const ProjectsContainer = styled.div`
    width: 100%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #88909B;

    @media(max-width: ${({theme})=> theme.mobile}){
        width: 768px;
    }
`

export const Card = styled.div`
    display: flex;
    margin: 6em 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: ${({direction}) => direction % 2 === 0 ? "row" : "row-reverse" };

    div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-self: flex-start;
        padding: 1rem 2rem;
        
    }

    .projectInfoContainer{
        width: 140em;
        display: flex;
        flex-direction: column;
    }

    .projectImageContainer{
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .techStack{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        text-align: start;
        flex-wrap: wrap;
        width: 100%;
        padding: 2em 0;
        margin: auto;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#333333" : "#dddddd"};
        
        .tech{
            padding: 5px 10px;
            font-weight: bold;
            border-radius: 4px;
            background-color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#ffffff" : "#24292F"};
            box-shadow: 0 20px 25px -5px #0000001a;
            margin: 0.2em;
       }
    }

    img{
        box-shadow: 0 25px 50px -2px rgb(0 0 0 / 0.30);
        border-radius: 8px;
        object-position: center;
        object-fit: cover;
        width: 100%;
    }

    a{
        text-decoration: none;
        font-weight: bold; 
        display: flex;
        align-items: center;
        justify-content: center;        
    }

    .gitHub_link{
        display: inline;
    }

    h3{
        margin: 0;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#333333" : "#FFFFFF"};
    }

    h1{
        margin: 0;
        font-weight: bold;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#000000" : "#FFFFFF"};
    }

    p{
        font-size: 1.2em;
        line-height: 30px;
        text-align: justify;
        color: #000000;
        color: ${({theme}) => theme.colors.body === "#F9FAFB" ? "#000000" : "#88909B"};
    }

    @media(max-width: ${({theme}) => theme.tab}){
        flex-direction: ${({direction}) => direction % 2 === 0 ? "column-reverse" : "column-reverse" };
        width: 100%;
        margin: 3em auto;

        .projectInfoContainer{
            width: 86%;
            margin: auto;
            justify-content: center;
            align-items: center;

            p{
                text-align: center;
            }
        }

        .projectImageContainer{
            padding: 6rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .techStack{
            justify-content: center;
        }
    }
`