import { Box, Image} from '@chakra-ui/react'
import { useContext, useEffect, useRef } from 'react'
import CircleIcon from '../components/CircleIcon'
import { gsap } from "gsap"
import { 
    LeadingActions, 
    SwipeableList, 
    SwipeableListItem, 
    SwipeAction, 
    TrailingActions 
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import { CharacterContext } from '../context/CharacterContext'

const Cards = ({some, animationSlide }) => {

   const {name, status, image, species, location, id} = some
   const cardRef = useRef()
   const {setOneFetch, setDeleteCharacter} = useContext(CharacterContext)


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

    useEffect(()=> {
        if(animationSlide){
            gsap.fromTo(cardRef.current, 1, { opacity: 0, translateX: -1000}, {opacity: 1, translateX: 0}) 
        }
    }, [animationSlide])

    
    // edit
    function leadingActions(){
        return (
             <LeadingActions>
                 <SwipeAction 
                 onClick={() => console.log('Edit') }
                 >
                     Wubba Lubba Dub Dub!
                 </SwipeAction>
            </LeadingActions>
            )
     }
 
     // delete
     function trailingAction(){
         return (
             <TrailingActions>
                 <SwipeAction
                 destructive={true}
                 onClick={() => setDeleteCharacter(id)}
                 >
                      Boom!
                 </SwipeAction>
             </TrailingActions>
         )
     }

    return (

        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingAction()}
            >
                <Box 
                    ref={cardRef} 
                    borderRadius='lg' 
                    overflow='hidden' 
                    shadow='md' 
                    className='bg-zinc-600 md:flex cursor-pointer opacity-0 w-full' 
                >
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
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Cards
