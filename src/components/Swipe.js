import React from 'react'

const Swipe = () => {
    return (
        <div className='lg:absolute w-10/12 top-28 swipe-box'>
            <div className='felx justify-between w-10/12'>
                <i className="text-zinc-100 fas fa-long-arrow-alt-right swipe lg:absolute z-20 swipe-arrow-right"></i>
                <i className="text-zinc-100 fas fa-long-arrow-alt-left swipe lg:absolute z-20 swipe-arrow-left"></i>
            </div>

            <p className='text-zinc-100 lg:absolute grid swipe swipe-text'>Swipe it! </p>
        </div>
    )
}

export default Swipe
