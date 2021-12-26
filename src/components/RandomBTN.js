import gsap from 'gsap/all'
import React, { useRef } from 'react'



const RandomBTN = ({handleClick}) => {
    const randomBtn = useRef()
       // hover random button
   const enter = () => {
    gsap.to(randomBtn.current, .5, { rotateY: '360deg'})
   }

   const leave = () => {
    gsap.to(randomBtn.current, .5, { rotateY: '0deg'})
   }
   
    return (
        <button 
        className='bg-zinc-50 text-zinc-800 text-bold w-28 h-28 rounded-full shadow-xl hover:bg-zinc-800 hover:text-zinc-50 mb-10 random'
        onClick={() => handleClick()}
        data-hover='Pussy!'
        ref={randomBtn}
        onMouseEnter={enter}
        onMouseLeave={leave}
        >
            Random
        </button>
    )
}

export default RandomBTN
