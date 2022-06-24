import { Flex, Heading, Box } from '@chakra-ui/react';
function SkillBox({title, test}) {
    console.log(test)
    return (
        <Box w={{lg: '35vw'}} mt={{base: '16'}} >
                <Heading border='2px' borderRadius='25' mb='5' p='1'>{title}</Heading>
                <ul>
                    <Flex direction='column'>
                        {test.map(t => (
                            <li>{t}</li>
                        ))}
                    </Flex>
                </ul>
        </Box>
    )
};

export default SkillBox;