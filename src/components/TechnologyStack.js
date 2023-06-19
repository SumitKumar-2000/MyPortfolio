import React from 'react'
import { Container } from './styledComponents/Container.styled'
import { TechStack } from './styledComponents/TechStack.styled'

const TechnologyStack = () => {

    const Technologies = [
        {
            id : 1,
            techName: "HTML",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200238/Portfolio%20Images/HTML5_yedr9w.png"
        },
        {
            id : 2,
            techName: "CSS",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200247/Portfolio%20Images/CSS3_yf1vkj.png"
        },
        {
            id : 3,
            techName: "BOOTSTRAP",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200312/Portfolio%20Images/bootstrap_ublzcb.png"
        },
        // {
        //     id : 5,
        //     techName: "STYLEDCOMPONENTS",
        //     image : require('../assets/styledComponent.png')
        // },
        {
            id : 4,
            techName: "TAILWIND",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200263/Portfolio%20Images/tailwindCss_d6kkau.png"
        },
        {
            id : 5,
            techName: "JAVASCRIPT",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200260/Portfolio%20Images/Javascript_knqmp0.png"
        },
        {
            id : 6,
            techName: "REDUX",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200254/Portfolio%20Images/redux_a9e3xw.png"
        },
        // {
        //     id : 9,
        //     techName: "ZUSTAND",
        //     image : require('../assets/zustand.png')
        // },
        {
            id : 7,
            techName: "REACTJS",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200383/Portfolio%20Images/ReactJS_o712ru.png"
        },
        {
            id : 8,
            techName: "NEXTJS",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200740/Portfolio%20Images/nextjs__ya2ycf.png"
        },
        {
            id : 9,
            techName: "NODEJS",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200402/Portfolio%20Images/nodeJs_y8hsjj.png"
        },
        {
            id : 10,
            techName: "EXPRESSJS",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200411/Portfolio%20Images/express_jjaeuw.png"
        },
        {
            id : 11,
            techName: "MONGODB",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200427/Portfolio%20Images/mongoDb_r3enyu.png"
        },
        {
            id : 12,
            techName: "JWT",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687201157/Portfolio%20Images/JWT_hwfg5j.png"
        },
        {
            id : 13,
            techName: "FIREBASE",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200446/Portfolio%20Images/GoogleFirebase_vrqas3.png"
        },
        // {
        //     id : 17,
        //     techName: "POSTMAN",
        //     image : require('../assets/postman.png')
        // },
        {
            id : 14,
            techName: "GIT",
            image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200511/Portfolio%20Images/git_jhgy22.png"
        },
        // {
        //     id : 19,
        //     techName: "FIGMA",
        //     image : require('../assets/Figma.png')
        // },
        // {
        //     id : 20,
        //     techName: "SPLINE3D",
        //     image : require('../assets/spline.png')
        // },
        // {
        //     id : 21,
        //     techName: "WORDPRESS",
        //     image : require('../assets/wordpress.png')
        // },
    ]
    
    return (
        <Container>
            <TechStack>
                <h1>
                    Tools & Technologies I use
                </h1>
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