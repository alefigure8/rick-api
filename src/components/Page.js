import { Spinner, Box} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Cards from '../components/Cards'
import RandomBTN from './RandomBTN'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCharacters} from '../Redux/actions/characterActions'


const Page = () => {

    const [animationSlide, setAnimationSlide] = useState(false)

   // random button
   const handleClick = () => {
        setAnimationSlide(false)
        dispatch(fetchCharacters(6))
   }

   const dispatch = useDispatch(6)

   // all characters
    useEffect(()=>{
        dispatch(fetchCharacters(6))
    },[])


    // use selector
    const allCharacters = useSelector(state => state.allCharacters.characters)
    const allCharacter = useSelector(state => state.character.characters)

    useEffect(() => {
        setTimeout(()=>{setAnimationSlide(true)},300)
    }, [allCharacters])

    return (
        <div className='px-10 flex justify-center items-center pb-5 bg-zinc-700 xl:h-5/6'>
            <div className='flex flex-col justify-center items-center pt-7'>
                <div className='lg:absolute fixed bottom-0 lg:right-14 right-5 z-50'>
                    <RandomBTN
                        handleClick={handleClick}
                    />
                </div>
                <div>
                    {allCharacters.length < 1 
                        ? 
                        <Spinner color='orange.500' size="xl" speed='0.65s' thickness='4px'/>  
                        :
                        (
                            <Box as='div' className='grid lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                                { allCharacters.length === 1 
                                    ?
                                    allCharacter.map(some => (
                                            <Cards 
                                                key={some.name} 
                                                some={some}
                                                animationSlide={animationSlide}
                                            /> )) 
                                    :
                                    allCharacters.map(some => (
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
