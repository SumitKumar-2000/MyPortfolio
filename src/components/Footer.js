import React from 'react'
import {StyledFooter} from '../components/styledComponents/Footer.styled'


const Footer = () => {

  const social = [
    {
        id : 1,
        name : "gmail",
        socialLink : "",
        socialIcon : require('../assets/gmail_black.png')
    },
    {
        id : 2,
        name : "github",
        socialLink : "https://github.com/SumitKumar-2000",
        socialIcon : require('../assets/github.png')

    },
    {
        id : 3,
        name : "linkedin",
        socialLink : "https://www.linkedin.com/in/sumit-rajput-861b37188/",
        socialIcon : require('../assets/linkedin_black.png')
    },
  ]  

  return (
    <StyledFooter>
        {social.map(item => {
            return <a target="_blank" rel="noreferrer" href={item.socialLink} className='socialBox' key={item.id}>
                    <img className='socialIcon' src={item.socialIcon} alt={item.name}/>
                </a>
        })}
    </StyledFooter>
  )
}

export default Footer