import { Input, Container, Button, InputGroup, InputRightElement, FormControl, Box} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { CharacterContext } from '../context/CharacterContext'


const Nav = () => {

    const {setNameCharacter, setCallSearchFetch} = useContext(CharacterContext)

    const [getValue, setValue] = useState('')

    function handleClick(e){
        e.preventDefault()
        setNameCharacter(getValue)
        setCallSearchFetch(true)
        setValue('')
    }

    

    return (
        <Box className='bg-zinc-800'>
            <Container maxW='container.xl' display="flex" alignItems="center" justifyContent="space-between" px={10} h={24} >
                    <div className='w-8/12'>
                    <h3 className='md:text-5xl text-2xl font-bold text-zinc-100 uppercase'>Rick And Morty</h3>
                    </div>
                    <FormControl
                        as='form'
                        onSubmit={handleClick}
                        w={4/12}
                    >
                        <InputGroup> 
                            <Input 
                                size='md' 
                                placeholder="Searching" 
                                type="text" color='gray.100' 
                                borderColor='gray.400' 
                                value={getValue}
                                onChange={ e => setValue(e.target.value)}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button 
                                type='submit'
                                h='1.75rem' 
                                size='md' bg='gray.100' 
                                _hover={{bg:'gray.200'}} 
                                color='gray.600'
                                >
                                    Go!
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
             </Container>
         </Box>    
    )
}

export default Nav
