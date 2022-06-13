import { Link, Flex} from '@chakra-ui/react';

function Nav({tabs, setCurrentTab, currentTab}) {
    console.log(currentTab.tab)
    return (
        <Flex justifyContent='space-around' fontSize='xl' py={5}> 
            {tabs.map(tab => (
                <Link key={tab} onClick={() => setCurrentTab({tab})} className={`${currentTab.tab === tab && 'selected'}`}>{tab}</Link>
            ))}
        </Flex>
    )
};

export default Nav;