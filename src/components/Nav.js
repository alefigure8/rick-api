import { Container, Box, useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerOverlay, DrawerContent} from '@chakra-ui/react'
import React from 'react'
import SaveStorage from './SaveStorage'
import Swipe from './Swipe'


const Nav = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <Box className='bg-zinc-800 flex items-center'>
            <Container maxW='container.xl' className='flex' alignItems="center" justifyContent="space-between" px={10} h={'36'} >
                <div className='lg:w-6/12 w-12/12'>
                        <h3 className='md:text-5xl text-3xl font-bold text-zinc-100 uppercase title'>Rick And Morty</h3>
                </div>
                <Swipe />
             </Container>
             <div>
                    <i onClick={onOpen} ref={btnRef} className="fas fa-bars text-white text-2xl font-bold mr-20 hover:text-zinc-200 cursor-pointer"></i>
                    <Drawer  
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                    >
                        <DrawerOverlay />
                        <DrawerContent>
                        <DrawerBody>
                        <DrawerCloseButton 
                            color='#bbb'
                        />
                             <SaveStorage />
                        </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </div>
         </Box>    
    )
}

export default Nav
