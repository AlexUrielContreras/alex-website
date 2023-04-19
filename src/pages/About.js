import { Heading, Box, Link} from '@chakra-ui/react'
import Socials from '../componets/Socials'

function About() {
    return (
        <Box as='section' align='center' mt={{ base: '20vh', md: '23vh'}}>
            <Box>
                <Heading as='h1' fontWeight='bold' letterSpacing='2px' fonts='heading' fontSize={{ base: '3rem', md: '4rem' , lg: '5rem' }} className='fade-in'>Alex Contreras</Heading>
                <Heading as='h2' fontSize={{ base: '1.6rem', md: '2rem', lg: '2.5rem' }} className='fade-in'>Full Stack Developer</Heading>
            </Box>

            <Box className='fade-in' pt={{base:'5'}} mt={{base: '5'}} borderTop='2px solid black'>
                <Box fontSize={{base:'1.4rem', md: '1.75rem'}}>
                    <Link href={require('../assets/files/Alex_Contreras_V2_Resume_Website.pdf')} download>Download my Resume</Link>
                </Box> 

                <Box mt={6}>
                    <Socials /> 
                </Box>
            </Box>
        </Box>
    )
};

export default About;