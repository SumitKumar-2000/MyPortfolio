import React from 'react'
import {StyledFooter} from '../components/styledComponents/Footer.styled'
import { Container } from './styledComponents/Container.styled'


const Footer = () => {

  const social = [
    {
        id : 1,
        name : "gmail",
        socialLink : "mailto:sumitkumarrajput2000@gmail.com",
        socialIcon : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200532/Portfolio%20Images/gmail_black_uvdtiw.png"
    },
    {
        id : 2,
        name : "github",
        socialLink : "https://github.com/SumitKumar-2000",
        socialIcon : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200435/Portfolio%20Images/github_bnngr2.png"

    },
    {
        id : 3,
        name : "linkedin",
        socialLink : "https://www.linkedin.com/in/sumit-rajput-861b37188/",
        socialIcon : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200516/Portfolio%20Images/linkedin_black_idai1w.png"
    },
  ]  

  return (
    <Container>
      <StyledFooter>
          {social.map(item => {
            return <a target="_blank" rel="noreferrer" href={item.socialLink} className='socialBox' key={item.id}>
                      <img className='socialIcon' src={item.socialIcon} alt={item.name}/>
                  </a>
          })}
      </StyledFooter>
    </Container>
  )
}

export default Footer