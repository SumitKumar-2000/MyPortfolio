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
                <p>Full Stack Developer from <strong className='country'>INDIA</strong> with expertise in HTML, CSS, JavaScript, ReactJs, NextJs, NodeJs, ExpressJs, MongoDB, and various other dependencies & technologies. Known for my curiosity and eagerness to learn, I actively engage in interactive teaching, organizing & participating in hackathons, and ensuring the completion of every task and project with precision and excellence.</p>
                <TransparentButton bg="#0ea5e9"><a href={Resume} download="Resume-SumitKumar">My Resume</a></TransparentButton>
            </div>
            <ImageContainer>
                <img loading='lazy' src="https://res.cloudinary.com/dcdwstdye/image/upload/v1687202705/Portfolio%20Images/sumitHD__smgvdn.png" alt="self pic" />
            </ImageContainer>
        </StyledAbout>
    </Container>
  )
}

export default About