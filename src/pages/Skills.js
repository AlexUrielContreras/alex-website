import { Flex } from '@chakra-ui/react';
import SkillBox from '../componets/SkillBox'
function Skills() {
    const tech = [['HTML5', 'CSS3','SaSS','Javascript', 'SQL', 'NoSQL', 'Handlebars'], /* Languages  */
                 ['Bootstrap', 'jQuery', 'Node.js', 'Express.js', 'React.js'], /* Frameworks */
                 ['MySQL', 'MongoDB','Sequelize', 'Mongoose'], /*   Databases*/
                 ['Jest', 'Git', 'npm', 'PWA'] /*  Tools  */
                ]
    return (
        <Flex direction={{base: 'column', lg: 'row'}} justifyContent={{lg:'space-around'}} fontSize={{base: '2xl'}} mt={{lg: '5vh'}} textAlign='center' pb='10' wrap='wrap' letterSpacing='2px'>
            <SkillBox title={'LANGUAGES'} tech={tech[0]} />  
            <SkillBox title={'FRAMEWORK'} tech={tech[1]} />  
            <SkillBox title={'DATABASES/DBMS'} tech={tech[2]} />
            <SkillBox title={'TOOLS'} tech={tech[3]} />
        </Flex>

    )
};

export default Skills;