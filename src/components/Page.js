import { Spinner, Box } from '@chakra-ui/react'
import { useContext } from 'react'
import {CharacterContext} from '../context/CharacterContext'
import Cards from '../components/Cards'

const Page = () => {

    const {getCharacters} = useContext(CharacterContext)

    return (
        <div className='bg-zinc-500 px-10'>
            <Box className='items-center flex min-h-screen justify-center'>
                {getCharacters.length < 1 ? 
                    <div className="flex justify-center items-center">
                        <Spinner color='gray.100' size="xl"/>  
                    </div> :
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
                    }
            </Box>
        </div>
    )
}

export default Page
