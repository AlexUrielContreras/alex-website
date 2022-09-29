import { Flex, Heading, Box, Grid, GridItem} from '@chakra-ui/react';

function SkillBox({title, tech}) {
    return (
        <Box w={{base: '80vw', lg: '35vw'}} mt={{base: '16'}} >
                <Heading border='2px' borderRadius='25' mb='5' p='1'>{title}</Heading>
                <ul>
                    <Grid templateColumns='1fr 1fr'>
                        {tech.map(techList => (
                            <GridItem as='li' key={techList}>{techList}</GridItem>
                        ))}
                    </Grid>
                </ul>
        </Box>
    )
};

export default SkillBox;