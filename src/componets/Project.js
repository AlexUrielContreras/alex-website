import { Box,Image,Heading, Text, Tag } from '@chakra-ui/react'

function Project({info}) {
    console.log(info)
    
    const {name , description, tech} = info
    return (
        <Box border='2px' borderRadius='25' w={{base:'80vw', md: '60vw', lg:'25vw'}}  mt={10} >
            <Image borderTopRadius='23' src={require(`../assets/project-img/${name}.png`)} />
            <Box p={2}>
                <Heading as='h3'>{name}</Heading>
                <Text as='p' fontSize={{base:'lg'}} >{description}</Text>
                {tech.map(lang => (
                    <Tag mr='2' m='2' p='2' letterSpacing='.5px' key={lang}>{lang}</Tag>
                ))}
            </Box>
        </Box>
    )
};

export default Project;