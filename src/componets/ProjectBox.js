import { Box,Image,Heading, Text, Flex } from '@chakra-ui/react'

function Project({name , imgSrc , description, tech, liveSite, githubRepo}) {

    return (
        <Box border='2px' as='article' w={{base:'80vw', md: '39vw', xl:'20vw'}}  _hover={{boxShadow:'dark-lg'}}>
            <Image src={process.env.PUBLIC_URL + imgSrc } alt='personal projects thubnail'/>
            <Box p={3} >
                <Heading as='h3' borderBottom='1px' fontSize='3xl'>
                    {name}
                </Heading>
                <Text as='p' fontSize={{base:'md'}} my='1'>{description}</Text>
                <Flex my='3' justifyContent='space-around'>
                    <button  className='proj-link-btn'><a rel='noreferrer noopener' href={liveSite} target='_blank'>Live site</a></button>
                    <button  className='proj-link-btn'><a rel='noreferrer noopener' href={githubRepo} target='_blank'>Github Repo</a></button>
                </Flex>
                <Flex wrap='wrap' columnGap='3'>
                    {tech.map((lang) => (
                        <div key={lang}>{lang}</div>
                    ))}
                </Flex>
            </Box>
        </Box>
    )
};

export default Project;
