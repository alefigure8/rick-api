import { Spinner, Box } from '@chakra-ui/react'
import { useContext, useEffect, useState, useRef } from 'react'
import {CharacterContext} from '../context/CharacterContext'
import Cards from '../components/Cards'
import gsap from 'gsap/all'
import Swipe from './Swipe'

const Page = () => {

    const {getCharacters, setCallFetch, setCharacters, getCharacter} = useContext(CharacterContext)
    const [animationSlide, setAnimationSlide] = useState(false)
    const randomBtn = useRef()

    useEffect(() => {
        setTimeout(()=>{setAnimationSlide(true)},1500)
    }, [getCharacters])

   // random button
   const handleClick = (e) => {
       e.preventDefault()
        setAnimationSlide(false)
        setCharacters([])
        setCallFetch(true)
   }

   // hover random button
   const enter = () => {
    gsap.to(randomBtn.current, .5, { rotateY: '360deg'})
   }

   const leave = () => {
    gsap.to(randomBtn.current, .5, { rotateY: '0deg'})
   }

    return (
        <div className='px-10 flex justify-center items-center pt-14 pb-5 bg-zinc-700 xl:h-5/6'>
            <div className='flex flex-col justify-center items-center'>
                <div className='lg:absolute fixed bottom-0 lg:right-14 right-5 z-50'>
                    <button 
                    className='bg-zinc-50 text-zinc-800 text-bold w-28 h-28 rounded-full shadow-xl hover:bg-zinc-800 hover:text-zinc-50 mb-10 random'
                    onClick={handleClick}
                    data-hover='Pussy!'
                    ref={randomBtn}
                    onMouseEnter={enter}
                    onMouseLeave={leave}
                    >
                        Random
                    </button>
                </div>
                <div>
                    {getCharacters.length < 1 
                        ? 
                        <Spinner color='orange.500' size="xl" speed='0.65s' thickness='4px'/>  
                        :
                        (
                            <Box as='div' className='grid lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                                <Swipe />
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
