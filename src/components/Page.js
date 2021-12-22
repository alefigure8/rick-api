import { Spinner, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import {CharacterContext} from '../context/CharacterContext'
import Cards from '../components/Cards'

const Page = () => {

    const {getCharacters} = useContext(CharacterContext)

    return (
        <div className='px-10 flex justify-center'>
            <Box mt='14'>
                {getCharacters.length < 1 ? 
                    <div>
                        <Spinner color='gray.100' size="xl"/>  
                    </div> :
                    <div>
                        <div className='flex justify-center mb-10'>
                            <button className='bg-zinc-800 text-zinc-50 text-bold text-2xl p-2 rounded-md'>Random</button>
                        </div>
                        <Box as='div' className='grid grid-cols-3 gap-10 items-center'>
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
