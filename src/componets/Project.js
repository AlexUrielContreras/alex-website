import { Box,Image,Heading, Text } from '@chakra-ui/react'

function Project({info}) {
    
    const {name , description} = info
    return (
        <Box border='2px' w={{base:'80vw', md: '60vw', lg:'20vw'}}  m={7}>
            <Image  src={require(`../assets/project-img/${name}.png`)} />
            <Box p={2}>
                <Heading as='h3'>{name}</Heading>
                <link></link>
                <Text as='p' fontSize={{base:'lg'}} textAlign='justify'>{description}</Text>
            </Box>
        </Box>
    )
};

export default Project;