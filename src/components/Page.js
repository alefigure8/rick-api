import { Spinner, Box } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import {CharacterContext} from '../context/CharacterContext'
import Cards from '../components/Cards'

const Page = () => {

    const {getCharacters, setCallFetch, setCharacter} = useContext(CharacterContext)
    const [activeFade, setActiveFade] = useState(false)

    // transition effect
    useEffect(() => {
        if(getCharacters.length < 1){
            setTimeout(() => {
                setActiveFade(true)
            }, 1000);
        }
    }, [getCharacters])

   // random button
   const handleClick = (e) => {
       e.preventDefault()
        setCallFetch(true) 
        setCharacter([])
   }

    return (
        <div className='px-10 flex justify-center pt-14 pb-14 bg-zinc-500'>
            <Box>
                {getCharacters.length < 1 ? 
                    <div>
                        <Spinner color='orange.500' size="xl" speed='0.65s' thickness='4px'/>  
                    </div> 
                    :
                    <div>
                        <div className='flex justify-center mb-10'>
                            <button 
                            className={`bg-zinc-800 text-zinc-50 text-bold text-2xl p-2 rounded-md shadow-xl hover:bg-orange-500 ${activeFade ? 'opacity-100 transition-all duration-300' : 'opacity-0'}`}
                            onClick={handleClick}
                            >Random</button>
                        </div>
                        <Box as='div' className='grid lg:grid-cols-3 gap-10'>
                            {getCharacters.map(some => (
                                <Cards 
                                    key={some.name} 
                                    some={some}
                                    borderWidth='1px' 
                                    borderRadius='lg' 
                                    overflow='hidden' 
                                />
                            ))}
                        </Box>
                    </div>
                    }
            </Box>
        </div>
    )
}

export default Page
