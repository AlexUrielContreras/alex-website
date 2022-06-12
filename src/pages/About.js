import { Flex, Heading, Text } from '@chakra-ui/react'
function About() {
    return (

        <Flex direction='column' textAlign='center' pt={10}>
            <Heading as='h1' fontSize='4xl'>Alex U. Contreras</Heading>
            <Heading as='h2' fontSize='2xl'>Full Stack Developer</Heading>
        
            <Text as='p' mt={10}>
                Hello, I recently completed KU's Full Stack Developer Program.  
            </Text>
        </Flex>
       
    )
};

export default About;