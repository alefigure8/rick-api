import {createContext, useEffect, useState} from 'react'
import {getCharacterData} from '../Configs/configs'

export const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [getCharacters, setCharacter] = useState ([])
    const [callFetch, setCallFetch] = useState (false)

    useEffect( () => {
        const result = async () => {
            // axios
            setCharacter(await getCharacterData())
            setCallFetch(false)
        }
        result()        
    }, [callFetch])

    return (
        <CharacterContext.Provider
            value={{getCharacters, setCallFetch, setCharacter}}

        >
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider
