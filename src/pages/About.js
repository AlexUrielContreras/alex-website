import { Heading, Box, Link} from '@chakra-ui/react'
import Socials from '../componets/Socials'

function About() {
    return (
        <Box as='section' align='center' mt={{ base: '20vh', md: '23vh'}}>
            <Box>
                <Heading as='h1' letterSpacing='2px' fontSize={{ base: '3rem', md: '4rem' , lg: '5rem' }}>Alex Contreras</Heading>
                <Heading as='h2' fontSize={{ base: '1.6rem', md: '2rem', lg: '2.5rem' }}>Full Stack Developer</Heading>
            </Box>

            <Box pt={{base:'5'}} mt={{base: '5'}} borderTop='2px solid black'>
                <Box fontSize={{base:'1.4rem', md: '2rem'}}>
                    <Link href={require('../assets/files/alex_resume_v1.pdf')} download>Download my Resume</Link>
                </Box> 

                <Box mt={6}>
                    <Socials /> 
                </Box>
            </Box>
        </Box>
    )
};

export default About;