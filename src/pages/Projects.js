import Project from '../componets/Project'
import { Flex } from '@chakra-ui/react'



function Projects() {
    const projectInfo = [
        {
            name: 'GeekTutor',
            description: 'GeekTutor is an app where users can view and schedule sessions with tutors. My team consisted of 4 members and we used Agile development methodology. I worked on the front-end to implement queries to display their data',
            tech: ['MERN', 'Javascript']
        },
        {
            name: 'Bootleg',
            description: '',
            tech: []
        },
        {
            name: 'Budget Tracker',
            description: '',
            tech: []
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