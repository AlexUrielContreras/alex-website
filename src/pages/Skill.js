import { Flex } from '@chakra-ui/react';
import SkillBox from '../componets/SkillBox'
function Skills() {
    const tech = [['HTML5', 'CSS3', 'SaSS', 'Javascript', 'Node', 'Handlebars'], /* Languages  */
                 ['jQuery', 'React'], /* Libraries */
                 ['Bootstrap', 'Express.js'], /* Frameworks */
                 ['MySQL', 'MongoDB','Sequelize', 'Mongoose'], /*   Databases*/
                 ['Jest', 'Git', 'GitHub', 'npm', 'Insomnia', 'Heroku'] /*  /*  Tools  */
                ]
    return (
        <Flex direction={{base: 'column', lg: 'row'}} justifyContent={{lg:'space-around'}} fontSize={{base: '2xl'}} mt={{lg: '5vh'}} align={{base: 'center', md: 'baseline'}} textAlign='center' pb='10' wrap='wrap' letterSpacing='2px'>
            <SkillBox title={'Front End'} tech={tech[0]} />  
            <SkillBox title={'LIBRARIES'} tech={tech[1]} />  
            <SkillBox title={'FRAMEWORK'} tech={tech[2]} /> 
            <SkillBox title={'DBMS/ORM/ODM'} tech={tech[3]} />
            <SkillBox title={'TOOLS'} tech={tech[4]} />
        </Flex>

    )
};

export default Skills;