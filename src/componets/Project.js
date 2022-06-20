import { Box,Image,Heading, Text } from '@chakra-ui/react'

function Project({bg, title}) {
    return (
        <Box bg={bg} w={{base:'80vw', md: '60vw', lg:'25vw'}} h={{base:'45vh'}} m={7}>
            <Image  src/>
            <Heading as='h3'>{title}</Heading>
            <Text as='p' fontSize={{base:'lg'}}></Text>
        </Box>
    )
};

export default Project;