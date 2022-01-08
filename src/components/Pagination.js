import React from 'react'
import { useDispatch } from 'react-redux'
import { paginationCharacter } from '../Redux/actions/characterActions'

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

const Pagination = ({next, prev}) => {
    const dispatch = useDispatch()

    return (
        <div className='flex justify-center mt-5'>
            {prev !== null && <button onClick={async() => {
                await dispatch(paginationCharacter(prev))
               await topFunction()
            }} 
                className='text-zinc-200 uppercase font-semibold bg-zinc-800 p-3 rounded-l-md hover:bg-zinc-600 duration-300' 
            >Prev</button>}
            {next !== null && <button onClick={async() => {
                await dispatch(paginationCharacter(next))
                await topFunction()
            }} 
                className='text-zinc-200 uppercase font-semibold bg-zinc-800 p-3 rounded-r-md hover:bg-zinc-600 duration-300' 
            >Next</button>}
        </div>
    )
}

export default Pagination
