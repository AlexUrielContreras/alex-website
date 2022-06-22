import Project from '../componets/Project'
import { Flex } from '@chakra-ui/react'



function Projects() {
    const projectInfo = [
        {
            name: 'GeekTutor',
            description: 'venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus'
        },
        {
            name: 'Bootleg',
            description: 'venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus'
        },
        {
            name: 'Budget Tracker',
            description: 'venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae semper quis lectus'
        }
    ];

    return (
        <Flex direction={{base:'column', lg: 'row'}} align='center' flexWrap='wrap' justifyContent='center' >
            {projectInfo.map((info) => {
                return <Project key={info.name} info={info} />
            })}
        </Flex>
    )
};

export default Projects;