import {  Container, Box} from '@chakra-ui/react'


const Footer = () => {

    return (
        <Box className='bg-zinc-900'>
            <Container maxW='container' display="flex" alignItems="center" justifyContent="center" className='flex-wrap footer' >
                <div className='flex flex-col md:flex-row justify-around lg:w-3/12'>
                    <h3 className='text-zinc-200 text-lg font-bold uppercase mb-3 md:mb-0'>Alejandro Gomez Nieto</h3>
                    <div className='flex items-center justify-center'>
                        <a href='https://twitter.com/alegomeznieto' target='_blank' rel='noreferrer'><img src='/img/twitter.svg' alt='twitter' className='w-7 hover:opacity-50 transition-all duration-300 cursor-pointer'/></a>
                        <a href='https://github.com/alefigure8' target='_blank' rel='noreferrer'><img src='/img/github.svg' alt='github'className='w-6  hover:opacity-50 transition-all duration-300 cursor-pointer'/></a>
                        <a href='https://www.linkedin.com/in/alejandro-gomez-nieto-20582487/' target='_blank' rel='noreferrer'><img src='/img/linkedin.svg' alt='linkedin'className='w-6 hover:opacity-50 transition-all duration-300 cursor-pointer'/></a>
                    </div>
                </div>
                <div className='flex justify-center flex-wrap lg:w-6/12 items-center'>
                    <img src='https://rickandmortyapi.com/icons/icon-144x144.png?v=1538abef51e33ef514e8fe1ab9aeab4e'  className='w-7 mr-5 img-footer' alt='Icon Api'/>
                    <a href='https://rickandmortyapi.com/' target='_blank' rel='noreferrer' className='w-6/12' ><p className='text-zinc-200 text-lg font-bold uppercase hover:text-orange-600 transition-all duration-300'>The Rick and Morty API</p></a>
                </div>
                <div className='flex'>
                    <img src='/img/react.svg' alt='react'className='w-12 mr-5'/>
                    <img src='/img/redux.svg' alt='redux'className='w-10 mr-5'/>
                    <img src='/img/vercel.svg' alt='linkedin'className='w-24 mr-5'/>
                </div>
             </Container>
         </Box>    
    )
}

export default Footer