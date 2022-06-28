import { Flex, Heading, Box } from '@chakra-ui/react';
import SkillBox from '../componets/SkillBox'
function Skills(props) {
    console.log(props)
    const test = [['HTML5', 'CSS3','SaSS','Javascript', 'SQL', 'NoSQL', 'Handlebars'], /* Languages  */
                 ['Bootstrap', 'jQuery', 'Node.js', 'Express.js', 'React.js'], /* Frameworks */
                 ['MySQL', 'MongoDB','Sequelize', 'Mongoose'], /*   Databases*/
                 ['Jest', 'Git', 'npm', 'PWA'] /*  Tools  */
                ]
    return (
        <Flex direction={{base: 'column', lg: 'row'}} justifyContent={{lg:'space-around'}} fontSize={{base: '2xl'}} mt={{lg: '5vh'}} textAlign='center' pb='10' wrap='wrap' letterSpacing='2px'>
            <SkillBox title={'LANGUAGES'} test={test[0]} />  
            <SkillBox title={'FRAMEWORK'} test={test[1]} />  
            <SkillBox title={'DATABASES/DBMS'} test={test[2]} />
            <SkillBox title={'TOOLS'} test={test[3]} />
        </Flex>

    )
};

export default Skills;