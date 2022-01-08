import React from 'react'

const CharacterNotFound = ({error}) => {
    return (
        <div className='flex flex-col justify-center'>
            <img src='/img/notfound.png' className='w-96 self-center' alt='Not Found' />
            <p className='font-bold text-6xl text-zinc-100 text-center'>{error}</p>
        </div>
    )
}

export default CharacterNotFound
