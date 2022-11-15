import { Box,Image,Heading, Text, Flex } from '@chakra-ui/react'

function Project({info}) {
    const {name , description, tech, link} = info
    
    return (
        <Box border='2px' as='article' w={{base:'80vw', md: '39vw', xl:'20vw'}}  _hover={{boxShadow:'dark-lg'}}>
            <Image src={require(`../assets/project-img/${name}.png`)} />
            <Box p={3} >
                <Heading as='h3' borderBottom='1px' fontSize='3xl'>
                    {name}
                </Heading>
                <Text as='p' fontSize={{base:'md'}} my='1'>{description}</Text>
                <Flex my='3' justifyContent='space-around'>
                    <button  className='proj-link-btn'><a href={link}>Live site</a></button>
                    <button  className='proj-link-btn'><a href={link}>Github Repo</a></button>
                </Flex>
                <Flex wrap='wrap' columnGap='2'>
                    {tech.map((lang) => (
                        <div key={lang}>{lang}</div>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
};

export default Project;