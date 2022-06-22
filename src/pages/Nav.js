import { Link, Flex , Button,  Drawer,
    DrawerBody,
    Image,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure} from '@chakra-ui/react';


function Nav({tabs, setCurrentTab, currentTab}) {
    const w = window.innerWidth
    const {isOpen, onOpen, onClose} = useDisclosure()
    return (
        <>
        {w > 767 ? <Flex justifyContent={{base:'center', md:'flex-end'}} fontSize='xl' py={5} > 
            {tabs.map(tab => (
                <Link mr={{md: '10'}} key={tab} onClick={() => setCurrentTab({tab})} className={`${currentTab.tab === tab && 'selected'}`}>{tab}</Link>
            ))}
        </Flex> :
        <>
           <Button onClick={onOpen} bg='#ffe5d9' ><Image src={require('../assets/icons/menu.ico')}/></Button>
           <Drawer 
                isOpen={isOpen} 
                placement='top'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerBody>
                        {tabs.map(tab => (
                           <Link key={tab} onClick={() => setCurrentTab({tab})} className={`${currentTab.tab === tab && 'selected'}`}>{tab}</Link>
                        ))}
                    </DrawerBody>
                </DrawerContent>
             </Drawer>
        </>
        }
         

        </>
    )
};

export default Nav;