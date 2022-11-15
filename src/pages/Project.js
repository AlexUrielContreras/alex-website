import ProjectBox from '../componets/ProjectBox'
import { Flex } from '@chakra-ui/react'

function Projects() {
    const projectInfo = [
        {
            name: 'GeekTutor',
            description: 'GeekTutor is an app where users can view and schedule sessions with tutors. Worked in a team of 4 following the agile development methodology. I worked on the front-end to implement queries to display their data and the login/logout functionality.',
            tech: ['MERN', 'Javascript', 'Apollo', 'Email.js'],
            link: 'https://geektutor-123.herokuapp.com/'
        },
        {
            name: 'Bootleg',
            description: 'Bootleg is a web application that allows users to upload a picture and also comment on another user\'s post. Worked in a team of 4 following the agile development methodology. I implement handlebars, login/logout logic, and built the dashboard.',
            tech: ['Handlebars', 'CSS3','Javascript', 'Express', 'Sequelize'],
            link: 'https://bootleg-clone.herokuapp.com/'
        },
        {
            name: 'One Tech Blog',
            description: 'A web application where users can create a profile and write a blog about any topic. Built following the MVC design pattern. Users can also check other user profiles and see all the blogs they have written. Unit testing done on helper function to improve maintainability.',
            tech: ['Handlebars', 'CSS3', 'Javascript', 'Sequlize', 'Express', 'Jest'],
            link: 'https://onetechblog.herokuapp.com/'
        },
        {
            name: 'Budget Tracker',
            description: 'Finance app where you can track your spending. App uses a service worker to be able to function offline. It\'s also a Progressive Web Application so users can download it onto their desktop or mobile device.',
            tech: ['Javascript', 'Express', 'Mongoose', 'PWA'],
            link: 'https://agile-forest-86640.herokuapp.com/'
        },
        {
            name: 'noSQL Backend',
            description: 'A social media application\'s backend. Designed REST apis to perform CRUD operations on the noSQL database.',
            tech: ['Javascript', 'Express','MongoDB', 'Mongooes'],
            link: 'https://drive.google.com/file/d/143AhdeKcGKyDBXIridyw4-u2jVf4trBb/view'
        },
        {
            name: 'Password Generator',
            description: 'Web application that outputs a password base on the users answers.',
            tech: ['HTML5', 'CSS3', 'Javascript'],
            link: 'https://alexurielcontreras.github.io/Password-Generator/'
        }
        
    ];

    return (
        <Flex direction={'row'} flexWrap='wrap' gap='5' align={{base:'center', md:'inherit'}} justifyContent={{base: 'center', xl: 'start' }}  pt={{base: '10'}}>
            {projectInfo.map((info) => {
                return <ProjectBox key={info.name} info={info} />
            })}
        </Flex>
    )
};

export default Projects;