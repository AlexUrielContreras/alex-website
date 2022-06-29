import { Flex, Link, Image} from '@chakra-ui/react'
function Socials() {
    return (
        <Flex alignItems='center' justifyContent='center'>  
            <Link mx='5' href='https://www.linkedin.com/in/alex-contreras-788b55225/'><Image src={require('../assets/icons/linkedin.ico')} alt='Linkedin icon link'/></Link>             
            <Link mx='5' href='https://github.com/AlexUrielContreras'><Image src={require('../assets/icons/github.ico')} alt='Github Icon link' /></Link>
            <Link mx='5' href='https://twitter.com/AUC829'><Image src={require('../assets/icons/twitter.ico')} alt='twitter icon link'/></Link>
        </Flex>
    )
};


export default Socials;