import { Flex, Heading, Box } from '@chakra-ui/react';
function Skills() {
    return (
        <Flex direction={{base: 'column', lg: 'row'}} justifyContent={{lg:'space-around'}} fontSize={{base: '2xl'}} textAlign='center' pb='10' wrap='wrap'>
            <Box w={{lg: '35vw'}} mt={{base: '16'}} >
                <Heading border='2px' borderRadius='25' mb='5' p='1'>LANGUAGES</Heading>
                <ul>
                    <Flex direction='column'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SaSS</li>
                        <li>Javascript</li>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>NoSQL</li>
                        <li>Handlebars</li>
                    </Flex>
                </ul>
            </Box>
            <Box w={{lg: '35vw'}} mt={{base: '16'}} >
                <Heading border='2px' borderRadius='25' mb='5'  p='1'>FRAMEWORKS</Heading>
                <ul>
                    <Flex direction='column'>
                        <li>Bootstrap</li>
                        <li>jQuery</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                        <li>React.js</li>
                    </Flex>
                </ul>
            </Box>
            <Box  w={{lg: '35vw'}}mt={{base: '20'}}  >
                <Heading border='2px' borderRadius='25' mb='5'  p='1'>DATABASES/DBMS</Heading>
                <ul>
                    <Flex direction='column'>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                 
                    </Flex>
                </ul>
            </Box>
            <Box w={{lg: '35vw'}}mt={{base: '20'}}  >
                <Heading border='2px' borderRadius='25' mb='5'  p='1'>TOOLS</Heading>
                <ul>
                    <Flex direction='column'>
                        <li>Jest</li>
                        <li>Git</li>
                        <li>npm</li>
                        <li>PWA</li>
                    </Flex>
                </ul>
            </Box>
        </Flex>

    )
};

export default Skills;