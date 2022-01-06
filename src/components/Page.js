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
    const error = useSelector(state => state.allCharacters.error)

    useEffect(() => {
        setTimeout(()=>{setAnimationSlide(true)},300)
    }, [allCharacters])

    return (
        <div className='md:px-5 flex justify-center items-center pb-5 bg-zinc-700 flex-1' >
            <div className='flex flex-col justify-center items-center pt-7'>
                <div className='lg:absolute fixed flex-nowrap lg:bottom-10 bottom-32 lg:right-14 right-5 z-50'>
                    <RandomBTN
                        handleClick={handleClick}
                    />
                </div>
                <div>
                    {allCharacters.length < 1 && error === ''
                        ? 
                        <Spinner color='orange.500' size="xl" speed='0.65s' thickness='4px'/>  
                        :
                        error === 'Character not found'
                        ? <p className='font-bold text-6xl text-zinc-100'>{error}</p>
                        :<Box as='div' className='grid md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10'>
                            { allCharacters.map(some => (
                                <Cards 
                                    key={some.name} 
                                    some={some}
                                    animationSlide={animationSlide}
                                /> ))
                            }
                        </Box>
                    }
                </div>
            </div>
        </div>
    )
}

export default Page
