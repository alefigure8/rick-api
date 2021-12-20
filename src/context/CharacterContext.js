import {createContext, useEffect, useState} from 'react'
import {getCharacterData} from '../Configs/configs'

export const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [getCharacters, setCharacter] = useState ([])

    useEffect( () => {
        const result = async () => {
            // axios
            setCharacter(await getCharacterData())
        }
        result()        
    }, [])

    return (
        <CharacterContext.Provider
            value={{getCharacters}}
        >
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider
