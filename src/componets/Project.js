import { Box,Image,Heading, Text, Tag, Flex, Link } from '@chakra-ui/react'

function Project({info}) {
    const {name , description, tech, link} = info
    
    return (
        <Box border='2px' as='article' borderRadius='25' w={{base:'80vw', md: '35vw', lg:'18vw'}}  m={4} _hover={{boxShadow:'dark-lg'}}>
            <Image borderTopRadius='23' src={require(`../assets/project-img/${name}.png`)} />
            <Box p={3} >
                <Heading as='h3' fontSize='3xl'>
                    <Link href={`${link}`}>
                        {name}
                    </Link>
                </Heading>
                <Text as='p' fontSize={{base:'md'}} my='1'>{description}</Text>
                <Flex wrap='wrap' columnGap='5px'>
                    {tech.map((lang) => (
                        <Tag p='2' my='1' border='1px' borderColor='grey' key={lang}>{lang}</Tag>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
};

export default Project;