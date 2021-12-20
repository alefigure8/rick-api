import React from 'react'
import { Input, Container, Button, InputGroup, InputRightElement, Breadcrumb} from '@chakra-ui/react'


const Nav = () => {

    function handleClick(){
        console.log('Hola')
    }

    return (
        <div className='bg-zinc-600'>
            <Container maxW='container.xl' display="flex" alignItems="center" justifyContent="space-between" px={10} h={24} >
                    <h1 className='md:text-3xl text-xl text-zinc-200 w-4/12'>Rick And Morty</h1>
                    <InputGroup w={4/12}> 
                        <Input size='md' placeholder="Searching" type="text" color='gray.100' borderColor='gray.400' />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='md' bg='gray.100' _hover={{bg:'gray.200'}} color='gray.600' onClick={handleClick}>
                                Go!
                            </Button>
                        </InputRightElement>
                    </InputGroup>
             </Container>
         </div>    
    )
}

export default Nav
