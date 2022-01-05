import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteLocalStorageCharacter } from '../Redux/actions/characterActions'

const SaveStorage = () => {
    const [getInfo, setInfo] = useState({})
    const { isOpen, onOpen, onClose } = useDisclosure()

    const dispatch = useDispatch()

    function handleDelete(){
        dispatch(deleteLocalStorageCharacter(getInfo.id))
        onClose()
    }

    const storageChracters = useSelector(state => state.localCharacters.characters)

    return (
        <>
            {storageChracters.length > 0 
                ?
                <div className='flex flex-col py-2 px-2 rounded-md'>
                    <h2 className='text-2xl font-bold text-center m-10 uppercase text-orange-500'>Items saved</h2>
                    { storageChracters.map(item => (
                        <div key = {item.id} onClick={()=>{
                            onOpen()
                            setInfo(item)
                        }}  className='flex items-center mb-4'>
                            <img
                                className='w-16 rounded-full storage' 
                                src={item.image} 
                                alt={item.name}
                            />
                            <h3 className='font-bold ml-3 text-zinc-100 hover:text-orange-500 cursor-pointer text-xl'>{item.name}</h3>
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
                                        className='rounded-full w-56'
                                    />
                                </div>    
                                <div className='ml-5 flex flex-col justify-between w-72'>
                                    <div>
                                    <a href={getInfo.url} target='_blank' rel='noreferrer'><h3 className='text-3xl font-bold uppercase text-zinc-100 hover:text-orange-500 text-center'>{getInfo.name}</h3></a>
                                        <Box
                                            className='text-zinc-50'
                                            fontSize='lg'
                                            fontWeight='semibold'
                                            my='4'
                                        >
                                            <p><span className='text-zinc-400 font-semibold'>Status:</span> {getInfo.status}</p>
                                            <p><span className='text-zinc-400 font-semibold'>Specie:</span>  {getInfo.species}</p>
                                            <p><span className='text-zinc-400 font-semibold'>Gender:</span>  {getInfo.gender}</p>
                                            <p><span className='text-zinc-400 font-semibold'>Seen on:</span>  {getInfo.episode && getInfo.episode.length ? getInfo.episode.length : 'Unkown'} Episodes</p>
                                            <p><span className='text-zinc-400 font-semibold'>Origin:</span>  {getInfo.origin && getInfo.origin.name ? getInfo.origin.name : 'Unkown'}</p>
                                            <p><span className='text-zinc-400 font-semibold'>Location:</span>  {getInfo.location && getInfo.location.name ? getInfo.location.name : 'Unkown'}</p>
                                        </Box>
                                    </div>
                                    <Button
                                        onClick={handleDelete}
                                        mx='auto' width='28' variant='ghost' color='#ddd' bg='#333' _hover={{color:'#333', bg:'#f97316'}}>Delete</Button>
                                </div>
                            </div>      
                        </ModalBody>
                    </ModalContent>
                    </Modal>
                </div>
                :
                <h2 className='text-xl font-bold text-center m-10 uppercase text-orange-500'>Save some Characters</h2>
            }
        </>
    )
}

export default SaveStorage
