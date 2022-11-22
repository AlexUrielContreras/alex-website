import ProjectBox from '../componets/ProjectBox';
import projectInfo from '../data/projectInfo';

import { Flex } from '@chakra-ui/react';

function Projects() {

    return (
        <Flex direction={'row'} flexWrap='wrap' gap='5' align={{base:'center', md:'inherit'}} justifyContent={{base: 'center', xl: 'start' }}  py={{base: '10'}}>
            {projectInfo.map((info) => {
                return <ProjectBox key={info.name} info={info} />
            })}
        </Flex>
    )
};

export default Projects;