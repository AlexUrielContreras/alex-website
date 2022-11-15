import {Heading, Box, Grid, GridItem} from '@chakra-ui/react';

function SkillBox({title, tech}) {
    return (
        <Box w={{base: '80vw', lg: '35vw'}} mt={{base: '16'}} >
                <Heading mb='5' fontSize={{base: '1.6rem' ,md: '2.5rem'}} borderBottom='2px'>{title}</Heading>
                <ul>
                    <Grid templateColumns='1fr 1fr'>
                        {tech.map(techList => (
                            <GridItem as='li' fontSize={{base: '1.2rem', md: '1.5rem'}} key={techList}>{techList}</GridItem>
                        ))}
                    </Grid>
                </ul>
        </Box>
    )
};

export default SkillBox;