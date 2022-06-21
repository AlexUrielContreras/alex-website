import { Flex, Heading, Text, Box, Link } from '@chakra-ui/react'
function About() {
    return (
        <>
            <Flex >
                <Box textAlign='center' mt={{base: '14', md: '10'}}>
                    <Heading as='h1'  fontSize={{base:'2.1rem',lg:'5xl'}}>Alex U. Contreras</Heading>
                    <Heading as='h2'  fontSize={{base: '1.41rem' ,lg:'2xl'}} mt={5}>Full Stack Developer</Heading>
                </Box>
            </Flex>
            <Flex >
                <Text as='p' my={10} textAlign='justify' fontSize='lg'>
                    Hello! My name is Alex Contreras and I'm a Full Stack Developer. I completed The University of Kansas Full Stack Devloper Course were
                    we learned a new language or tool every week and impleament into a project. We also grouped up to plan, implement, and present 3 projects.
                    Projects ranged from a simple website that grabs data from an API, to creating full stack applications using the MERN tech stack. 
                    Being able to expirence working in a team was very eye-opening, I learned that comunication, flexablity, paitients, and hard work is key to getting 
                    the final product up and running. Some of my favorite thing I learned were Frameworks like Bootsrap to quickly create a responsive front end,
                    
                    each other.
                </Text>
            </Flex>

            <Flex >
                <Heading  as='h2' fontSize={{base: '2xl'}} textAlign='center'>Check out my Socials</Heading>
                <Flex  fontSize={{base:'1.34rem' }} direction={{base: 'column', md: 'row'}}>
                    <Flex m={{md:'2',xl: '5'}} mt={2} justifyContent='center'>
                        <Link href='https://www.linkedin.com/in/alex-contreras-788b55225/'>Linkedin</Link>
                    </Flex>
                    <Flex m={{md:'2',xl: '5'}}  mt={2} justifyContent='center'>
                        <Link href='https://github.com/AlexUrielContreras' >Github</Link>
                    </Flex>
                    <Flex m={{md:'2',xl: '5'}}  justifyContent='center' mt={2}>
                        <Link href='https://twitter.com/AUC829'>Twitter</Link>
                    </Flex>
                </Flex>
            </Flex>
        </>

    )
};

export default About;