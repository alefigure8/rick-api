import { Container, Box} from '@chakra-ui/react'
import Swipe from './Swipe'


const Nav = () => {


    return (
        <Box className='bg-zinc-800'>
            <Container maxW='container.xl' className='flex' alignItems="center" justifyContent="space-between" px={10} h={24} >
                    <div className='lg:w-8/12 w-12/12'>
                         <h3 className='md:text-5xl text-3xl font-bold text-zinc-100 uppercase'>Rick And Morty</h3>
                    </div>
                    <Swipe />
             </Container>
         </Box>    
    )
}

export default Nav
