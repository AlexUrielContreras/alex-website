import { Link, Flex} from '@chakra-ui/react';

function Nav({tabs, setCurrentTab, currentTab}) {
    return (
        <Flex justifyContent='flex-end' fontSize='xl' py={5} mr={10}> 
            {tabs.map(tab => (
                <Link mr={5} key={tab} onClick={() => setCurrentTab({tab})} className={`${currentTab.tab === tab && 'selected'}`}>{tab}</Link>
            ))}
        </Flex>
    )
};

export default Nav;