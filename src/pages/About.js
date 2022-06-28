import { Flex, Heading, Text, Box, Link } from '@chakra-ui/react'
import Socials from '../componets/Socials'

function About({ currentW }) {
    return (
        <>
            <Flex textAlign='center' justifyContent={{ base: 'center', md: 'space-between' }} mt={{ base: '10vh', md: '17vh' }}>
                <Box m={{ base: 'auto', sm: '0' }}>
                    <Heading as='h1' fontSize={{ base: '2.1rem', lg: '5xl' }}>Alex U. Contreras</Heading>
                    <Heading as='h2' fontSize={{ base: '1.41rem', lg: '3xl' }} mt={3}>Full Stack Developer</Heading>
                </Box>
                {currentW >= 770 ? <Socials /> : null}
            </Flex>

            <Flex >
                <Text as='p' my={10} fontSize='lg'>
                    Hello, My name is Alex Contreras and I'm a Full Stack Developer. I completed The University of Kansas Full Stack Developer Course were
                    we learned a new language or tool every week and implemented it into a project. We also grouped up to plan, implement, and present 3 projects.
                    Projects ranged from a simple website that grabs data from an API, to creating full-stack applications using the MERN tech stack.
                    Being able to experience working in a team was very eye-opening, I learned that communication, flexibility, patience, and hard work are key to getting
                    a product up and running. I am a hard worker and work well in a team environment. I am confident in my skills in a real-world setting.
                </Text>
            </Flex>
            <Box textAlign='center' fontSize='xl' py={{base: '10', lg: '20' }}>
                <Link href={require('../assets/files/alex_resume.pdf')} download>Click Here to Download my Resume</Link>
            </Box>
        </>

    )
};

export default About;