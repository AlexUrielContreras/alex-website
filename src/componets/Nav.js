import { Link, Flex} from '@chakra-ui/react';

function Nav({tabs, setCurrentTab}) {

    return (
        <Flex justifyContent='space-around' fontSize='xl' py={5}> 
            {tabs.map(tab => (
                <Link key={tab} onClick={() => setCurrentTab({tab})}>{tab}</Link>
            ))}
        </Flex>
    )
};

export default Nav;