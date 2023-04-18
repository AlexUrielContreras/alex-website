import { Flex, Link, Image} from '@chakra-ui/react'
function Socials() {
    return (
        <Flex alignItems='center' justifyContent='center'>  
            <Link mx='4' className='social-icon' rel='noopener noreference' href='https://www.linkedin.com/in/alex-contreras-788b55225/' target='_blank'><Image src={require('../assets/icons/linkedin.ico')} alt='Linkedin icon link'/></Link>             
            <Link mx='4' className='social-icon' rel='noopener noreference' href='https://github.com/AlexUrielContreras' target='_blank'><Image src={require('../assets/icons/github.ico')} alt='Github Icon link' /></Link>
        </Flex>
    )
};

export default Socials;