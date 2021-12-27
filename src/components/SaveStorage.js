import React, { useContext, useState, useEffect } from 'react'
import { CharacterContext } from '../context/CharacterContext'

const SaveStorage = () => {
    const [getStorage, setstorage] = useState([])
    const {saveCharacters} = useContext(CharacterContext)
    useEffect(()=>{
        const storage = JSON.parse(localStorage.getItem('characters'))
        setstorage(storage)
    },[getStorage])
    return (
        <>
            {getStorage.length > 0 && 
                <div className='flex py-2 px-4 rounded-md mb-7'>
                    { getStorage.map(item => (<img className='w-24 rounded-full mr-5' src={item.image} key = {item.id} alt={item.name}/>))}
                </div>
            }
        </>
    )
}

export default SaveStorage
