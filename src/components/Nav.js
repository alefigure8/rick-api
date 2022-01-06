import { Container, Box} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchSearchCharacter } from '../Redux/actions/characterActions'
import StorageBTN from './StorageBTN'

//<Swipe />
const Nav = () => {
    const [search, setsearch] = useState('')
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.preventDefault()
        dispatch(fetchSearchCharacter(search))
        setsearch('')
    }
    return (
        <Box className='bg-zinc-800 flex'>
            <Container maxW='container' className='flex navbar' alignItems="center" px={10} h={'36'} >
                <div className='lg:w-5/12 w-12/12 flex'>
                        <h3 className='md:text-5xl text-3xl font-bold text-zinc-100 uppercase title z-10'>Rick And Morty</h3>
                </div>
                <form
                    className='lg:w-6/12 form_search'
                    onSubmit={handleClick}
                >
                    <input className='w-6/12 h-10 rounded-l-md p-2' type='text' placeholder='Search Character' value={search} onChange={e => setsearch(e.target.value)} />
                    <button className='bg-zinc-400 text-zinc-50 px-4 h-10 rounded-r-md font-semibold hover:bg-zinc-600 duration-300'>Search</button>
                </form>
                <div className='navButton'>
                    <StorageBTN />  
                </div>
            </Container>
         </Box>    
    )
}

export default Nav
