import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    background-color: ${({ bg })=> bg || "#ffffff"};
    color: #ffffff;
    font-weight: bold;
    margin: 1rem 0;
    transition: all 0.4s 0s ease;
    font-family: 'Noto Sans', sans-serif;
    padding: 12px 20px;
    width: 10em;

    a{
        text-decoration: none;
        color: #ffffff;
    }

    &:hover{
        background-color: #0284c7;
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }
`

export const TransparentButton = styled.button`
    border-radius: 50px;
    border: 2px solid #0ea5e9;
    cursor: pointer;
    font-size: 14px;
    background-color: transparent;
    color: #0ea5e9;
    font-weight: bold;
    font-family: 'Noto Sans', sans-serif;
    padding: 12px 20px;
    width: 10em;
    transition: all 0.4s 0s ease;

    a{
        text-decoration: none;
        color: #0ea5e9;
        font-weight: bold; 
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    &:hover{
        box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }

`