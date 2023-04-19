import { Flex } from '@chakra-ui/react';
import SkillBox from '../componets/SkillBox';

function Skills() {
    const tech = [
                ['HTML5', 'CSS3', 'Sass', 'Bootstrap', 'Javascript', 'jQuery', 'React', 'Handlebars', 'JWT'], /* Frontend  */
                ['Node', 'Express', 'Python', 'Npm'], /* Backend */
                ['MySQL', 'MongoDB','Sequelize', 'Mongoose'], /*   Databases  */
                ['Jest', 'Git', 'GitHub', 'Postman', 'Heroku'] /* Tools */
            ];

    return (
        <Flex direction={{base: 'column', lg: 'row'}} justifyContent={{lg:'space-around'}} align={{base:'center', md:'baseline'}} mt={{lg: '10vh'}} pb='10' wrap='wrap' letterSpacing='2px'>
            <SkillBox title={'Frontend'} tech={tech[0]} />  
            <SkillBox title={'Backend'} tech={tech[1]} />
            <SkillBox title={'Database'} tech={tech[2]} />
            <SkillBox title={'Tools'} tech={tech[3]} />
        </Flex>

    )
};

export default Skills;