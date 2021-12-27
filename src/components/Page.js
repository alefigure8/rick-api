import { Spinner, Box } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import {CharacterContext} from '../context/CharacterContext'
import Cards from '../components/Cards'
import RandomBTN from './RandomBTN'
import SaveStorage from './SaveStorage'

const Page = () => {

    const {getCharacters, setCallFetch, setCharacters, getCharacter} = useContext(CharacterContext)
    const [animationSlide, setAnimationSlide] = useState(false)

    useEffect(() => {
        setTimeout(()=>{setAnimationSlide(true)},1500)
    }, [getCharacters])

   // random button
   const handleClick = () => {
        setAnimationSlide(false)
        setCharacters([])
        setCallFetch(true)
   }

    return (
        <div className='px-10 flex justify-center items-center pt-14 pb-5 bg-zinc-700 xl:h-5/6'>
            <div className='flex flex-col justify-center items-center'>
                <div className='lg:absolute fixed bottom-0 lg:right-14 right-5 z-50'>
                    <RandomBTN
                        handleClick={handleClick}
                    />
                </div>
                <SaveStorage />
                <div>
                    {getCharacters.length < 1 
                        ? 
                        <Spinner color='orange.500' size="xl" speed='0.65s' thickness='4px'/>  
                        :
                        (
                            <Box as='div' className='grid lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                                { getCharacters.length === 1 
                                    ?
                                        getCharacter.map(some => (
                                            <Cards 
                                                key={some.name} 
                                                some={some}
                                                animationSlide={animationSlide}
                                            /> )) 
                                    :
                                    getCharacters.map(some => (
                                        <Cards 
                                            key={some.name} 
                                            some={some}
                                            animationSlide={animationSlide}
                                        /> ))
                                    }
                            </Box>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Page
