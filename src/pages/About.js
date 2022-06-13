import { Flex, Heading, Text } from '@chakra-ui/react'
function About() {
    return (

        <Flex direction='column' textAlign='center' pt={10}>
            <Heading as='h1' fontSize='4xl'>Alex U. Contreras</Heading>
            <Heading as='h2' fontSize='2xl'>Full Stack Developer</Heading>

            <Text as='p' my={10} textAlign='justify'>
                Hello! My name is Alex Contreras and I'm a Full Stack Developer. I completed The University of Kansas Full Stack Devloper Course were
                we learned a new language or tool every week and impleament into a project. We also grouped up to plan, implement, and present 3 projects.
                Projects ranged from a simple website that grabs data from an API, to creating full stack applications using the MERN tech stack. 
                Being able to expirence working in a team was very eye-opening, I learned that comunication, flexablity, paitients, and hard work is key to getting 
                the final product up and running. Some of my favorite thing I learned were Frameworks like Bootsrap to quickly create a responsive front end,
                React to be able to create interactive UI using componets, and RDBMS like MySQL to be able to create tables and easily link data that are realated to 
                each other.
            </Text>
        </Flex>

    )
};

export default About;