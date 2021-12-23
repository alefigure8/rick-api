import { Box, Image} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import CircleIcon from '../components/CircleIcon'

const Cards = ({some}) => {

   const {name, status, image, species, location} = some
   let getColor = ''
    
    switch(status){
        case 'Alive':
            getColor ='green.500'
            break
        case 'Dead':
            getColor ='red.600'
            break
        case 'unknown':
            getColor ='gray.400'
            break
        default:
            getColor =''
        break
    }

    const [activeFade, setActiveFade] = useState(false)

   useEffect(() => {
    if(some?.image){
        setTimeout(() => {
            setActiveFade(true)
        }, 300);
    }
   }, [some.image])

    return (
            <Box borderRadius='lg' overflow='hidden' shadow='md' className={`bg-zinc-600 md:flex -translate-x-20 hover:scale-110 cursor-pointer ${activeFade ? 'opacity-100 duration-700 transition-all -translate-x-0' : 'opacity-0'}`}>
                <Image 
                    src={image}
                    alt={image}
                    objectFit='cover'
                />
                <div className='p-3'>
                    <Box
                        mt='1'
                        fontWeight='bold'
                        lineHeight='8'
                        className={`text-zinc-50 ${name.length < 15 ? 'text-4xl' : 'text-2xl'} hover:text-orange-500`}
                    >
                            {name}
                    </Box>
                    <Box
                        className='text-zinc-50'
                        fontSize='lg'
                        fontWeight='semibold'
                        mt='4'
                    >   
                    <CircleIcon color={getColor} boxSize={3}/>
                   {' '} {status} - {species}
                    </Box>
                    <Box
                        color='gray.400'
                        fontWeight='semibold'
                        mt='4'
                    >
                        Last known location:
                    </Box>
                    <Box
                        mt='1'
                        color='gray.100'
                    >
                        {location.name}
                    </Box>
                </div>
            </Box> 
    )
}

export default Cards
