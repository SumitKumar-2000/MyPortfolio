import React from 'react'
import { ImageContainer, StyledAbout } from './styledComponents/About.styled'
import { Container } from './styledComponents/Container.styled'

const About = () => {

  return (
    <Container>
        <StyledAbout>
            <div>
                <h1>About me.</h1>
                <p>Full Stack Developer from <strong style={{color:"#0284c7"}}>India</strong> skilled in HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB and many more dev dependencies & technologies. I'm kind of person who is so much curious to learn new technologies, love to interact & teach, love to participate & organize hackathons and tries to complete every task in a perfect manner.</p>
            </div>
            <ImageContainer>
                <img src={require('../assets/self/Sumit.png')} alt="self pic" />
            </ImageContainer>
        </StyledAbout>
    </Container>
  )
}

export default About