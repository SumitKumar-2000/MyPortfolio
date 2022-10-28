import React from 'react'
import { Container } from './styledComponents/Container.styled'
import { OceanText } from './styledComponents/OceanText.styled'
import { Card, ProjectsContainer } from './styledComponents/Projects.styled'
import { Button } from './styledComponents/Button.styled'

const Projects = () => {

  const projectList = [
    {
        id : 1,
        demoLink : 'https://foodde.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/e-FoodOrdering-WebApp",
        Image : require('../assets/ZOMATO_Login.png'),
        Head : "Food Ordering WebApp | Foodde!",
        Info : "A Food Ordeing website where users would able to add their food items to cart, search restaurant of their choice according to their mood preference and purchase food via online payment method- Razorpay payment gateway.",
        techStack : "• HTML • CSS • JavaScript • React.Js • Redux • Node.Js • Express.Js • Postman • Mongoose • MongoDB • JWT"
    },
    {
        id : 2,
        demoLink : 'https://foodde.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/e-FoodOrdering-WebApp",
        Image : require('../assets/NOTESHELL_Login.png'),
        Head : "Notes Manager WebApp | NoteShell",
        Info : "The WebApp utility allows you to create, edit, and manage your notes, you would able to set title, description, and category of the note. Whenever a note is created a note creation date will be assigned to it.",
        techStack : "• HTML • CSS • Bootstrap • Javascript • React.Js • Node.Js • Express.Js • Postman • Mongoose • MongoDB • JWT"
    },
    {
        id : 3,
        demoLink : 'https://xepenser.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/ReactReduxWebApp-Xpenser/tree/master",
        Image : require('../assets/Xepenser_AddExpense.png'),
        Head : "Expense Manager WebApp | Xepenser",
        Info : "Web utility which allows you to add your daily expenses, commodity along with their price, and keep track of them. It also provides you the functionality to set the category e.g. Education, Food, Shoping, Healthcare, etc for you expense.",
        techStack : "• HTML • CSS • JavaScript • React.Js"
    },
    {
        id : 4,
        demoLink : 'https://textdesk.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/reactWebApp-TextDesk",
        Image : require('../assets/TEXTDESK_Home.png'),
        Head : "Text Formatter WebApp | TextDesk",
        Info : "TextDesk is a utility which analyzes text quickly and allows user to find word count, find character count, copy text, clear text or remove extra spaces. It reports instant character count and word count statistics for a given text.",
        techStack : "• HTML • CSS • Bootstrap • JavaScript • React.Js"
    },
  ]

  return (
    <Container>
        <ProjectsContainer>
            <OceanText>Project Stack</OceanText>
            <div>
                {
                    projectList.map(project => {
                        return <Card key={project.id} direction={project.id}>
                            <div className='projectInfoContainer'>
                                <h1>{project.Head}</h1>
                                <p>{project.Info}</p>
                                <a href={project.repoLink}><h3>🔗Github Repo</h3></a>
                                <p className='techStack'>{project.techStack}</p>
                                <a href={project.demoLink}><Button bg="#0ea5e9" style={{color:"#ffffff"}}>View Demo</Button></a>
                            </div>
                            <div className='.projectImageContainer'>
                                <img src={project.Image} alt={project.Image}/>
                            </div>
                        </Card>
                    })
                }
            </div>
        </ProjectsContainer>
    </Container>
  )
}

export default Projects