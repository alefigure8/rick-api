import { Input, Container, Button, InputGroup, InputRightElement, Box} from '@chakra-ui/react'


const Nav = () => {


    function handleClick(){
        console.log('Hola')
    }

    // TODO etter design
    // TODO Searching for Characters

    return (
        <Box className='bg-zinc-800'>
            <Container maxW='container.xl' display="flex" alignItems="center" justifyContent="space-between" px={10} h={24} >
                    <div className='w-8/12'>
                    <h3 className='md:text-5xl text-2xl font-bold text-zinc-100 uppercase'>Rick And Morty</h3>
                    </div>
                    <InputGroup w={4/12}> 
                        <Input size='md' placeholder="Searching" type="text" color='gray.100' borderColor='gray.400' />
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='md' bg='gray.100' _hover={{bg:'gray.200'}} color='gray.600' onClick={handleClick}>
                                Go!
                            </Button>
                        </InputRightElement>
                    </InputGroup>
             </Container>
         </Box>    
    )
}

export default Nav
