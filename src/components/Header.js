import React from 'react'
import { Button } from './styledComponents/Button.styled'
import { StyledHeader, HeaderDetailContainer } from './styledComponents/Header.styled'

const Header = () => {
  return (
    <StyledHeader>
            <HeaderDetailContainer>
                <div><strong>Hi There, I'm</strong></div>
                <h1>Sumit Kumar</h1>
                <h1>Full Stack Developer</h1>
                <p> Developer with a passion for creating great digital experiences through immense applications.</p>
                <Button bg="#0ea5e9"><a href='https://www.linkedin.com/in/sumit-rajput-861b37188/'>Say Hello</a></Button>
            </HeaderDetailContainer>
    </StyledHeader>
  )
}

export default Header