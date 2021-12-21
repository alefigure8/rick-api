import { Box, Image} from '@chakra-ui/react'
import CircleIcon from '../components/CircleIcon'

const Cards = ({some}) => {

   const {name, status, image, species, origin} = some
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

    return (
            <Box borderRadius='lg' overflow='hidden' className='bg-zinc-600' display='flex'>
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
                        className={`text-zinc-50 ${name.length < 15 ? 'text-4xl' : 'text-2xl'}`}
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
                    {` ${status} - ${species}`}
                    </Box>
                    <Box
                        color='gray.400'
                        mt='4'
                    >
                        {`Origin: ${origin.name}`}
                    </Box>
                </div>
            </Box> 
    )
}

export default Cards
