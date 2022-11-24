import { Flex } from '@chakra-ui/react';
import SkillBox from '../componets/SkillBox';

function Skills() {
    const tech = [
                ['HTML5', 'CSS3', 'SaSS', 'Javascript', 'Node', 'Handlebars'], /* Languages  */
                ['jQuery', 'React'], /* Libraries */
                ['Bootstrap', 'Express.js'], /* Frameworks */
                ['MySQL', 'MongoDB','Sequelize', 'Mongoose'], /*   Databases  */
                ['Jest', 'Git', 'GitHub', 'Npm', 'Insomnia', 'Heroku'] /* Tools */
            ];

    return (
        <Flex direction={{base: 'column', lg: 'row'}} justifyContent={{lg:'space-around'}} align={{base:'center', md:'baseline'}} mt={{lg: '5vh'}} pb='10' wrap='wrap' letterSpacing='2px'>
            <SkillBox title={'Front End'} tech={tech[0]} />  
            <SkillBox title={'Libraries'} tech={tech[1]} />  
            <SkillBox title={'Frameworks'} tech={tech[2]} /> 
            <SkillBox title={'Dbms / Orm / Odm'} tech={tech[3]} />
            <SkillBox title={'Tools'} tech={tech[4]} />
        </Flex>

    )
};

export default Skills;