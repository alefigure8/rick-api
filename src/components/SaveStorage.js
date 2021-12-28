import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, useDisclosure } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'

const SaveStorage = () => {
    const [getStorage, setstorage] = useState([])
    const [getInfo, setInfo] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>{
        const storage = JSON.parse(localStorage.getItem('characters'))
        setstorage(storage)
    },[setstorage])
    return (
        <>
            {getStorage.length > 0 && 
                
                <div className='flex flex-col py-2 px-2 rounded-md'>
                    <h2 className='text-2xl font-bold text-center m-10 uppercase text-orange-500'>Items saved</h2>
                    { getStorage.map(item => (
                        <div  className='flex items-center'>
                            <img onClick={()=>{
                                    onOpen()
                                    setInfo(item)
                                }} 
                                className='w-16 rounded-full storage mb-4' 
                                src={item.image} 
                                key = {item.id} 
                                alt={item.name}
                            />
                            <h3 className='font-bold ml-3 text-zinc-100 hover:text-orange-500 cursor-pointer'>{item.name}</h3>
                        </div>))
                    }

                    <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
                    <ModalContent
                        bg='#444'
                    >
                        <ModalCloseButton 
                            color='#ccc'
                        />
                        <ModalBody>
                            <div className='flex justify-center py-4 cursor-pointer'>
                                <div className='flex items-center'>
                                    <img  
                                        src={getInfo.image} 
                                        alt={getInfo.name}
                                        className='rounded-full w-48'
                                    />
                                </div>    
                                <div className='ml-5 flex flex-col justify-between w-72'>
                                    <div>
                                        <h3 className='text-3xl font-bold uppercase text-zinc-100 hover:text-orange-500'>{getInfo.name}</h3>
                                        <Box
                                            className='text-zinc-50'
                                            fontSize='lg'
                                            fontWeight='semibold'
                                            mt='4'
                                            >
                                            {getInfo.status} - {getInfo.species}
                                        </Box>
                                    </div>
                                    <Button mx='auto' width='28' variant='ghost' color='#ddd' bg='#333' _hover={{color:'#333', bg:'#f97316'}}>Delete</Button>
                                </div>
                            </div>      
                        </ModalBody>
                    </ModalContent>
                    </Modal>
                </div>
            }
        </>
    )
}

export default SaveStorage
