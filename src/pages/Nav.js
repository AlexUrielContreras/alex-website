import { 
    Link, 
    Flex , 
    Button,  
    Drawer,
    DrawerBody,
    Image,
    DrawerOverlay,
    DrawerContent,
    useDisclosure } from '@chakra-ui/react';


function Nav({currentW, setCurrentTab, currentTab}) {
    const tabs = ['Skills', 'Projects', 'Contacts'];

    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
        {currentW > 767 ? <Flex justifyContent={{base:'center', md:'flex-end'}} fontSize='xl' py={5} > 
            {tabs.map(tab => (
                <Link mr={{md: '10'}} key={tab} onClick={() => setCurrentTab({tab})} className={`${currentTab.tab === tab && 'selected'}`}>{tab}</Link>
            ))}
        </Flex> :
        <Flex justifyContent='space-between'>
           <Button pt={5} onClick={onOpen} bg='#ffe5d9' ><Image src={require('../assets/icons/menu.ico')}/></Button>
           <Drawer 
                isOpen={isOpen} 
                placement='top'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>

                    <DrawerBody>
                        <Flex justifyContent='space-around'>
                            {tabs.map(tab => (
                            <Link key={tab} onClick={() => setCurrentTab({tab})} className={`${currentTab.tab === tab && 'sm-nav'}`}>{tab}</Link>
                            ))}
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
             </Drawer>
             {currentTab !== '' ? <Image pt={4} mr={2} src={require('../assets/icons/home.ico')} onClick={() => setCurrentTab('')} alt=''/> : null}
             
        </Flex>
        }
         

        </>
    )
};

export default Nav;