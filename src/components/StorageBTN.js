import React, { useEffect, useState } from 'react'
import SaveStorage from './SaveStorage'
import {useDisclosure, Drawer, DrawerBody, DrawerCloseButton, DrawerOverlay, DrawerContent} from '@chakra-ui/react'

const StorageBTN = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    const [backgorund, setBackground] = useState('text-white mr-16 lg:mr-28 hover:text-zinc-200')

    const listenScrollEvent = () => {
        if (window.scrollY > 65) {
            setBackground('bg-zinc-200 lg:bg-zinc-800 py-8 px-9 lg:py-0 lg:px-0 rounded-full text-zinc-800 lg:text-white mr-5 lg:mr-28 hover:text-zinc-100 hover:bg-zinc-800')
          } else {
            setBackground('text-white mr-16 lg:mr-28 hover:text-zinc-200')
    
          }
    }

    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    
    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
  
    return (
        <div>
            <i onClick={onOpen} ref={btnRef} className={`fas fa-bars text-3xl font-bold cursor-pointer ${backgorund} transition-all duration-300`}></i>
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
    )
}

export default StorageBTN
