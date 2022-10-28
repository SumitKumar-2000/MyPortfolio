import React from 'react'
import { Container } from './styledComponents/Container.styled'
import { TechStack } from './styledComponents/TechStack.styled'

const TechnologyStack = () => {

    const Technologies = [
        {
            id : 1,
            techName: "C++",
            image : require('../assets/c++.png')
        },
        {
            id : 2,
            techName: "HTML",
            image : require('../assets/HTML5.png')
        },
        {
            id : 3,
            techName: "CSS",
            image : require('../assets/CSS3.png')
        },
        {
            id : 4,
            techName: "BOOTSTRAP",
            image : require('../assets/bootstrap.png')
        },
        {
            id : 5,
            techName: "STYLEDCOMPONENTS",
            image : require('../assets/styledComponent.png')
        },
        {
            id : 6,
            techName: "JAVASCRIPT",
            image : require('../assets/Javascript.png')
        },
        {
            id : 7,
            techName: "REACTJS",
            image : require('../assets/ReactJS.png')
        },
        {
            id : 8,
            techName: "REDUX",
            image : require('../assets/redux.png')
        },
        {
            id : 9,
            techName: "NEXTJS",
            image : require('../assets/nextjs_.png')
        },
        {
            id : 10,
            techName: "NODEJS",
            image : require('../assets/nodeJs.png')
        },
        {
            id : 11,
            techName: "EXPRESSJS",
            image : require('../assets/express.png')
        },
        {
            id : 12,
            techName: "MONGODB",
            image : require('../assets/mongoDb.png')
        },
        {
            id : 13,
            techName: "JWT",
            image : require('../assets/JWT.png')
        },
        {
            id : 14,
            techName: "FIREBASE",
            image : require('../assets/GoogleFirebase.png')
        },
    ]
    
    return (
        <Container>
            {/* <OceanText>Technology Stack</OceanText> */}
            <TechStack>
                <div className='techStackContainer'>
                    {Technologies.map(technology => {
                        return <div className='technology' key={technology.id}>
                            <img src={technology.image} alt=""/>
                        </div>
                    })}
                </div>
            </TechStack>
        </Container>
  )
}

export default TechnologyStack