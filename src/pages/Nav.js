import { Link, Flex} from '@chakra-ui/react';

function Nav({tabs, setCurrentTab, currentTab}) {
    return (
        <Flex justifyContent={{base:'center', md:'flex-end'}} fontSize='xl' py={5} > 
            {tabs.map(tab => (
                <Link mr={{md: '10'}} key={tab} onClick={() => setCurrentTab({tab})} className={`${currentTab.tab === tab && 'selected'}`}>{tab}</Link>
            ))}
        </Flex>
    )
};

export default Nav;