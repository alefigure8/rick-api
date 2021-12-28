import React, { useContext, useState, useEffect } from 'react'
import { CharacterContext } from '../context/CharacterContext'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure
  } from '@chakra-ui/react'

const SaveStorage = () => {
    const [getStorage, setstorage] = useState([])

    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        const storage = JSON.parse(localStorage.getItem('characters'))
        setstorage(storage)
    },[setstorage])
    return (
        <>
            {getStorage.length > 0 && 
                
                <div className=' py-2 px-2 rounded-md mb-7 justify-center items-center'>
                    { getStorage.map(item => (
                    <>
                        <img onClick={onOpen} className='w-24 rounded-full storage' src={item.image} key = {item.id} alt={item.name}/>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent>
                                <ModalHeader>{item.name}</ModalHeader>

                                <ModalCloseButton />

                                <ModalBody>
                                    <p>{item.name}</p>
                                </ModalBody>

                                <ModalFooter>
                                    <Button variant='ghost'>Delete</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>
                    ))}
                </div>
            }
        </>
    )
}

export default SaveStorage
