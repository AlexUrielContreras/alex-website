import { Box,  Heading } from '@chakra-ui/react';

function Skills() {
    return (
        <>
            <Box >
                <Heading as='h2' mt={10} fontSize={{base: '2xl' , md: '4xl'}}>Languages</Heading>
                <ul className='skill-list'>
                    <li className='skill-item'>HTML</li>
                    <li className='skill-item'>CSS</li>
                    <li className='skill-item'>SaSS</li>
                    <li className='skill-item'>JAVASCRIPT</li>
                    <li className='skill-item'>SQL</li>
                </ul>
            </Box>
            <Box >
                <Heading as='h2' mt={10} fontSize={{base: '2xl' , md: '4xl'}}>Javascript Tools</Heading>
                <ul className='skill-list'>
                    <li className='skill-item'>React</li>
                    <li className='skill-item'>jQuery</li>
                    <li className='skill-item'>Node</li>
                    <li className='skill-item'>Express</li>
                </ul>
            </Box>
            <Box >
                <Heading as='h2' mt={10} fontSize={{base: '2xl' , md: '4xl'}}>Frameworks</Heading>
                <ul className='skill-list'>
                    <li className='skill-item'>Bootstrap</li>
                    <li className='skill-item'>Materalize</li>
                </ul>
            </Box>
            <Box >
                <Heading as='h2'  mt={10} fontSize={{base: '2xl' , md: '4xl'}}>DB/ORM/ODM</Heading>
                <ul className='skill-list'>
                    <li className='skill-item'>MYSQL</li>
                    <li className='skill-item'>MongoDB</li>
                    <li className='skill-item'>Sequelize</li>
                    <li className='skill-item'>Mongoose</li>
                </ul>
            </Box>
            <Box >
                <Heading as='h2' mt={10} fontSize={{base: '2xl' , md: '4xl'}}>Other Tools</Heading>
                <ul className='skill-list'>
                    <li className='skill-item'>Jest</li>
                    <li className='skill-item'>HandleBars</li>
                    <li className='skill-item'>PWA</li>
                </ul>
            </Box>
           {/* <Box>
                <Heading as='h3' fontSize='3xl'>Key</Heading>
                <Box>
                    <p>1 :  Intermediate</p>
                    <p>1 :  Proficent</p>
                </Box>
            </Box> */}
        </>
    )
};

export default Skills;