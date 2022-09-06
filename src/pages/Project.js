import Project from '../componets/Project'
import { Flex } from '@chakra-ui/react'

function Projects() {
    const projectInfo = [
        {
            name: 'GeekTutor',
            description: 'GeekTutor is an app where users can view and schedule sessions with tutors. My team consisted of 4 members and we used Agile development methodology. I worked on the front-end to implement queries to display their data and the login/logout functionality',
            tech: ['MERN', 'Javascript'],
            link: 'https://geektutor-123.herokuapp.com/'
        },
        {
            name: 'Bootleg',
            description: 'Bootleg is an instagram clone that allow user to upload picture and also comment on other user post.My team consisted of 4 members and we used Agile development methodology. I worked on the front-end to implement handlebars, login/logout, and built the dashboard',
            tech: ['Handlebars', 'CSS3','Javascript', 'Express', 'MySQl', 'Sequelize'],
            link: 'https://group-project-bootleg.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            description: 'Finace app where you can track your spending. It uses a service worker to be able to function offline. It\'s also a Progressive Web Application so u can download it onto your desktop or mobile device.',
            tech: ['Javascript', 'Express', 'Mongoose'],
            link: 'https://agile-forest-86640.herokuapp.com/'
        }
    ];

    return (
        <Flex direction={{base:'column', lg: 'row'}} flexWrap='wrap' align={{base:'center', md:'inherit'}} alignContent={{base: 'center'}} py={{base: '12'}}>
            {projectInfo.map((info) => {
                return <Project key={info.name} info={info} />
            })}
        </Flex>
    )
};

export default Projects;