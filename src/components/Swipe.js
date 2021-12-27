import React from 'react'

const Swipe = () => {
    return (
        <div className='w-10/12 swipe-box'>
            <div className='flex justify-between items-center w-6/12'>
                <i className="text-zinc-100 fas fa-long-arrow-alt-left swipe swipe-arrow-left"></i>
                <p className='text-zinc-100 swipe swipe-text'>Swipe it! </p>
                <i className="text-zinc-100 fas fa-long-arrow-alt-right swipe swipe-arrow-right"></i>
            </div>
        </div>
    )
}

export default Swipe