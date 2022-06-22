import { Flex, Heading, Text, Box, Link,Image } from '@chakra-ui/react'

function About() {
    return (
        <>
            <Flex textAlign='center' justifyContent={{base: 'center', md:'space-between'}} mt={{base: '10vh', md: '17vh'}}>
                <Box m={{base:'auto', sm: '0'}}>
                    <Heading as='h1' fontSize={{ base: '2.1rem', lg: '5xl' }}>Alex U. Contreras</Heading>
                    <Heading as='h2' fontSize={{ base: '1.41rem', lg: '3xl' }} mt={3}>Full Stack Developer</Heading>
                </Box>
                {window.innerWidth >= 770 ? <Flex fontSize={{ base: '1.34rem' }} direction={{ base: 'column', md: 'row' }}  alignItems='center' justifyContent='space-around' >  
                        <Link mr={{md:'10'}} href='https://www.linkedin.com/in/alex-contreras-788b55225/'><Image src={require('../assets/icons/linkedin.ico')}/></Link>             
                        <Link mr={{md:'10'}} href='https://github.com/AlexUrielContreras'><Image src={require('../assets/icons/github.ico')}/></Link>
                        <Link mr={{md:'10'}} href='https://twitter.com/AUC829'><Image src={require('../assets/icons/twitter.ico')}/></Link>
                </Flex> : null}
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
        </>

    )
};

export default About;