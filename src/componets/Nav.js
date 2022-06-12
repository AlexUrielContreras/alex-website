import { Link, Flex, Box} from '@chakra-ui/react';

function Nav() {
    return (
        <>
        <Flex justifyContent='space-around' fontSize='xl' my={5}> 
            <Link >Skills</Link>
            <Link>Projects</Link>
            <Link >Resume</Link>
            <Link >Socials</Link>
        </Flex>
        </>
    )
};

export default Nav;