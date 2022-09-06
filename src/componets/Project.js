import { Box,Image,Heading, Text, Tag, Flex, Link } from '@chakra-ui/react'

function Project({info}) {
    const {name , description, tech, link} = info
    
    return (
        <Box border='2px' borderRadius='25' w={{base:'80vw', md: '60vw', lg:'20vw'}}  m={4} _hover={{boxShadow:'dark-lg'}}>
            <Image borderTopRadius='23' src={require(`../assets/project-img/${name}.png`)} />
            <Box p={3}>
                <Link href={`${link}`}>
                    <Heading as='h3' fontSize='3xl'>{name}</Heading>
                </Link>
                
                <Text as='p' fontSize={{base:'md'}} my='2' >{description}</Text>
                <Flex wrap='wrap'>
                    {tech.map((lang) => (
                        <Tag p='2' m='1' key={lang}>{lang}</Tag>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
};

export default Project;