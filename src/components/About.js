import React from 'react'
import { ImageContainer, StyledAbout } from './styledComponents/About.styled'
import { TransparentButton } from './styledComponents/Button.styled'
import { Container } from './styledComponents/Container.styled'
import Resume from '../assets/self/Resume-SumitKumar.pdf'

const About = () => {

  return (
    <Container>
        <StyledAbout>
            <div>
                <h1>About me.</h1>
                <p>Full Stack Developer from <strong className='country'>INDIA</strong> skilled in HTML, CSS, JavaScript, ReactJs, NodeJs, ExpressJs, MongoDB and many more dev dependencies & technologies. I'm kind of person who is so much curious to learn new technologies, love to interact & teach, love to participate & organize hackathons and tries to complete every task/project in a perfect manner.</p>
                <TransparentButton bg="#0ea5e9"><a href={Resume} download="Resume-SumitKumar">My Resume</a></TransparentButton>
            </div>
            <ImageContainer>
                <img src={require('../assets/self/Sumit.png')} alt="self pic" />
            </ImageContainer>
        </StyledAbout>
    </Container>
  )
}

export default About