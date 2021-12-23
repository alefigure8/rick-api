import {  Container, Box} from '@chakra-ui/react'


const Footer = () => {


    function handleClick(){
        // TODO Reducer for social media
    }

    return (
        <Box className='bg-zinc-900'>
            <Container maxW='container.xl' display="flex" alignItems="center" justifyContent="space-between" px={10} h={24} >
                <div>
                    <h3 className='text-zinc-50 text-lg font-bold uppercase'>Alejandro Gomez Nieto</h3>
                </div>
                <div className='flex justify-end w-6/12 items-center'>
                    
                    <img src='https://rickandmortyapi.com/icons/icon-144x144.png?v=1538abef51e33ef514e8fe1ab9aeab4e'  className='w-10 mr-5' alt='Icon Api'/>
                    <a href='https://rickandmortyapi.com/' target='_blank' rel='noreferrer' className='w-6/12' ><p className='text-zinc-50 text-lg font-bold uppercase hover:text-orange-600 transition-all duration-300'>The Rick and Morty API</p></a>
                </div>
             </Container>
         </Box>    
    )
}

export default Footer