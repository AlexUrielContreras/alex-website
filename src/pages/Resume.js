import { Image, Flex } from '@chakra-ui/react'
function Resume({currentW}) {
    console.log(currentW)
    return (
        <Flex direction={{base: 'column', lg: 'row'}} py={20} justifyContent='space-around'>
            <a href={require('../assets/files/Alex_resume.pdf')} download>Click to Download My Resume</a>
            {currentW > 600 ? <Image border='4px' src={require('../assets/project-img/Resume.png')} alt='My Resume' /> : null}
        </Flex>
    )
};

export default Resume;