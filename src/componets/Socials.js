import { Flex, Link, Image} from '@chakra-ui/react'
function Socials() {
    return (
        <Flex fontSize={{ base: '1.34rem' }} direction={{ base: 'column', md: 'row' }}  alignItems='center' justifyContent='space-around' >  
            <Link mr={{md:'10'}} href='https://www.linkedin.com/in/alex-contreras-788b55225/'><Image src={require('../assets/icons/linkedin.ico')}/></Link>             
            <Link mr={{md:'10'}} href='https://github.com/AlexUrielContreras'><Image src={require('../assets/icons/github.ico')}/></Link>
            <Link mr={{md:'10'}} href='https://twitter.com/AUC829'><Image src={require('../assets/icons/twitter.ico')}/></Link>
        </Flex>
    
    )
};


export default Socials;