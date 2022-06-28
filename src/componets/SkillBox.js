import { Flex, Heading, Box } from '@chakra-ui/react';
function SkillBox({title, tech}) {
    return (
        <Box w={{lg: '35vw'}} mt={{base: '16'}} >
                <Heading border='2px' borderRadius='25' mb='5' p='1'>{title}</Heading>
                <ul>
                    <Flex direction='column'>
                        {tech.map(list => (
                            <Box key={list}>{list}</Box>
                        ))}
                    </Flex>
                </ul>
        </Box>
    )
};

export default SkillBox;