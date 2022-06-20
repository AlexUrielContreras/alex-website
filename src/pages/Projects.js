import Project from '../componets/Project'
import { Flex } from '@chakra-ui/react'



function Projects() {
    return (
        <Flex direction={{base:'column', lg: 'row'}} align='center'>
        <Project /> 
        <Project /> 
        <Project /> 
        </Flex>
    )
};

export default Projects;