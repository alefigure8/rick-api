import {createContext, useEffect, useState} from 'react'
import {getCharacterData} from '../Configs/configs'

export const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [getCharacters, setCharacters] = useState ([])
    const [getCharacter, setCharacter] = useState ([])
    const [callFetch, setCallFetch] = useState (false)
    const [deleteCharacter, setDeleteCharacter] = useState(0)

    useEffect( () => {
        const result = async () => {
            // axios
            setCharacters(await getCharacterData(6))
            setCallFetch(false)
            
        }
        result()        
    }, [callFetch])

    useEffect( () => {
        const result = async () => {
            // axios
            setCharacter(await getCharacterData(1))
            setCharacters(getCharacters.map(each => each.id === deleteCharacter ? getCharacter : each))
            
        }
        result()        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteCharacter])

    return (
        <CharacterContext.Provider
            value={{getCharacters, setCallFetch, setCharacters, getCharacter, setDeleteCharacter}}
        >
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider
