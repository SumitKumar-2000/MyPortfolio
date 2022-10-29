import React from 'react'
import { Container } from './styledComponents/Container.styled'
import { TechStack } from './styledComponents/TechStack.styled'

const TechnologyStack = () => {

    const Technologies = [
        {
            id : 1,
            techName: "C++",
            url : "https://cplusplus.com/",
            image : require('../assets/c++.png'),
        },
        {
            id : 2,
            techName: "HTML",
            url : "https://html.com/",
            image : require('../assets/HTML5.png')
        },
        {
            id : 3,
            techName: "CSS",
            url : "https://www.w3schools.com/css/",
            image : require('../assets/CSS3.png')
        },
        {
            id : 4,
            techName: "BOOTSTRAP",
            url : "https://getbootstrap.com/",
            image : require('../assets/bootstrap.png')
        },
        {
            id : 5,
            techName: "STYLEDCOMPONENTS",
            url : "https://styled-components.com/",
            image : require('../assets/styledComponent.png')
        },
        {
            id : 5,
            techName: "TAILWIND",
            url : "https://tailwindcss.com/",
            image : require('../assets/tailwindCss.png')
        },
        {
            id : 6,
            techName: "JAVASCRIPT",
            url : "https://www.javascript.com/",
            image : require('../assets/Javascript.png')
        },
        {
            id : 7,
            techName: "REDUX",
            url : "https://redux.js.org/",
            image : require('../assets/redux.png')
        },
        {
            id : 8,
            techName: "ZUSTAND",
            url : "https://zustand-demo.pmnd.rs/",
            image : require('../assets/zustand.png')
        },
        {
            id : 9,
            techName: "REACTJS",
            url : "https://reactjs.org/",
            image : require('../assets/ReactJS.png')
        },
        {
            id : 10,
            techName: "NEXTJS",
            url : "https://nextjs.org/",
            image : require('../assets/nextjs_.png')
        },
        {
            id : 11,
            techName: "NODEJS",
            url : "https://nodejs.org/en/",
            image : require('../assets/nodeJs.png')
        },
        {
            id : 12,
            techName: "EXPRESSJS",
            url : "https://expressjs.com/",
            image : require('../assets/express.png')
        },
        {
            id : 13,
            techName: "MONGODB",
            url : "https://www.mongodb.com/",
            image : require('../assets/mongoDb.png')
        },
        {
            id : 14,
            techName: "JWT",
            url : "https://jwt.io/",
            image : require('../assets/JWT.png')
        },
        {
            id : 15,
            techName: "FIREBASE",
            url : "https://firebase.google.com/",
            image : require('../assets/GoogleFirebase.png')
        },
        {
            id : 16,
            techName: "POSTMAN",
            url : "https://www.postman.com/",
            image : require('../assets/postman.png')
        },
        {
            id : 17,
            techName: "GIT",
            url : "https://git-scm.com/",
            image : require('../assets/git.png')
        },
        {
            id : 18,
            techName: "FIGMA",
            url : "https://www.figma.com/",
            image : require('../assets/Figma.png')
        },
        {
            id : 19,
            techName: "SPLINE3D",
            url : "https://spline.design/",
            image : require('../assets/spline.png')
        },
        {
            id : 12,
            techName: "WORDPRESS",
            url : "https://wordpress.com/",
            image : require('../assets/wordpress.png')
        },
    ]
    
    return (
        <Container>
            <TechStack>
                <h1>
                    Tools & Technologies I use
                </h1>
                <div className='techStackContainer'>
                    {Technologies.map(technology => {
                        return <a href={technology.url} target="_blank" rel="noreferrer" className='technology' key={technology.id}>
                            <img src={technology.image} alt=""/>
                        </a>
                    })}
                </div>
            </TechStack>
        </Container>
  )
}

export default TechnologyStack