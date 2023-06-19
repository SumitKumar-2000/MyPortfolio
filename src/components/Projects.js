import React from 'react'
import { Container } from './styledComponents/Container.styled'
import { OceanText } from './styledComponents/OceanText.styled'
import { Card, ProjectsContainer } from './styledComponents/Projects.styled'
import { TransparentButton } from './styledComponents/Button.styled'

const Projects = () => {

  const projectList = [
    {
        id : 1,
        demoLink : 'https://foodde.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/e-FoodOrdering-WebApp",
        Image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200574/Portfolio%20Images/ZOMATO_Login_bxjehc.png",
        Head : "Food Ordering WebApp | Foodde!",
        Info : "A Food Ordeing website where users would able to add their food items to cart, search restaurant of their choice according to their mood preference and purchase food via online payment method- Razorpay payment gateway.",
        techStack : [
            {
                id : 1,
                tech : "HTML"
            },
            {
                id : 2,
                tech : "CSS"
            },
            {
                id : 3,
                tech : "Javascript"
            },
            {
                id : 4,
                tech : "React.Js"
            },
            {
                id : 5,
                tech : "Redux"
            },
            {
                id : 6,
                tech : "Node.Js"
            },
            {
                id : 7,
                tech : "Express.Js"
            },
            {
                id : 8,
                tech : "Postman"
            },
            {
                id : 9,
                tech : "Mongoose"
            },
            {
                id : 10,
                tech : "MongoDB"
            },
            {
                id : 11,
                tech : "JWT"
            },
        ],
    },
    {
        id : 2,
        demoLink : 'https://noteshell.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/MERN-WebApp-Noteshell",
        Image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200602/Portfolio%20Images/NOTESHELL_Login_jvlvt3.png",
        Head : "Notes Manager WebApp | NoteShell",
        Info : "The WebApp utility allows you to create, edit, and manage your notes, you would able to set title, description, and category of the note. Whenever a note is created a note creation date will be assigned to it.",
        techStack : [
            {
                id : 1,
                tech : "HTML"
            },
            {
                id : 2,
                tech : "CSS"
            },
            {
                id : 3,
                tech : "Bootstrap"
            },
            {
                id : 4,
                tech : "Javascript"
            },
            {
                id : 5,
                tech : "React.Js"
            },
            {
                id : 6,
                tech : "Redux"
            },
            {
                id : 7,
                tech : "Node.Js"
            },
            {
                id : 8,
                tech : "Express.Js"
            },
            {
                id : 9,
                tech : "Postman"
            },
            {
                id : 10,
                tech : "Mongoose"
            },
            {
                id : 11,
                tech : "MongoDB"
            },
            {
                id : 12,
                tech : "JWT"
            },
        ],
    },
    {
        id : 3,
        demoLink : 'https://xepenser.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/ReactReduxWebApp-Xpenser/tree/master",
        Image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200594/Portfolio%20Images/Xepenser_AddExpense_me8kmz.png",
        Head : "Expense Manager WebApp | Xepenser",
        Info : "Web utility which allows you to add your daily expenses, commodity along with their price, and keep track of them. It also provides you the functionality to set the category e.g. Education, Food, Shoping, Healthcare, etc for your expense.",
        techStack : [
            {
                id : 1,
                tech : "HTML"
            },
            {
                id : 2,
                tech : "CSS"
            },
            {
                id : 3,
                tech : "Javascript"
            },
            {
                id : 4,
                tech : "React.Js"
            },
            {
                id : 5,
                tech : "Redux"
            },
        ],
    },
    {
        id : 4,
        demoLink : 'https://textdesk.netlify.app/',
        repoLink : "https://github.com/SumitKumar-2000/reactWebApp-TextDesk",
        Image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687200626/Portfolio%20Images/TEXTDESK_Home_kmzwg8.png",
        Head : "Text Formatter WebApp | TextDesk",
        Info : "TextDesk is a utility which analyzes text quickly and allows user to find word count, find character count, copy text, clear text or remove extra spaces. It reports instant character count and word count statistics for a given text.",
        techStack : [
            {
                id : 1,
                tech : "HTML"
            },
            {
                id : 2,
                tech : "CSS"
            },
            {
                id : 3,
                tech : "Bootstrap"
            },
            {
                id : 4,
                tech : "Javascript"
            },
            {
                id : 5,
                tech : "React.Js"
            },
        ],
    },
    {
        id : 5,
        demoLink : "https://filterdashboard.netlify.app/",
        repoLink : "https://github.com/SumitKumar-2000/AgGrid-Dashboard",
        Image : "https://res.cloudinary.com/dcdwstdye/image/upload/v1687201986/Portfolio%20Images/Ag-grid-dashboard_arcngd.png",
        Head : "Dashboard | CMS",
        Info : "This Dashboard utility coupled with two views First one is 'Grid View' where you'll find the grid/table the grid is integrated with huge filtering options and second one is 'Chart View' which represents you data in well graphical and optimized manner",
        techStack : [
            {
                id : 1,
                tech : "HTML"
            },
            {
                id : 2,
                tech : "CSS"
            },
            {
                id : 3,
                tech : "Javascript"
            },
            {
                id : 4,
                tech : "React.Js"
            }, 
            {
                id : 5,
                tech : "Styled Components"
            }, 
            {
                id : 6,
                tech : "Zustand"
            }
        ]
    }
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
                                <h3><a target="_blank" rel="noreferrer" href={project.repoLink} >🔗Github Repo</a></h3>
                                <div className='techStack'>
                                    {project.techStack.map(item => (
                                       <div className='tech' key={item.id}>{item.tech}</div>
                                    ))}
                                </div>
                                <TransparentButton><a target="_blank" rel="noreferrer" href={project.demoLink} >View Demo</a></TransparentButton>
                            </div>
                            <div className='.projectImageContainer'>
                                <img loading='lazy' src={project.Image} alt={project.Image}/>
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