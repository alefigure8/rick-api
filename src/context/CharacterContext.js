import {createContext, useEffect, useState} from 'react'
import {getCharacterData} from '../Configs/configs'
import { saveLocal } from '../Configs/localStorage'

export const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [getCharacters, setCharacters] = useState ([])
    const [getCharacter, setCharacter] = useState ([])
    const [callFetch, setCallFetch] = useState (false)
    const [deleteCharacter, setDeleteCharacter] = useState(0)
    const [saveCharacters, setSaveCharacters] = useState(JSON.parse(localStorage.getItem('characters')) ?? [])

    useEffect(()=>{
        const result = async () => {
            setCharacters(await getCharacterData(6))
            setCallFetch(false)
        }
        result()        
    }, [callFetch])


    useEffect( () => {
        const result = async () => {
            setCharacter(await getCharacterData(1))
            setCharacters(getCharacters.map(each => each.id === deleteCharacter ? getCharacter : each))
        }
        result()        
    }, [deleteCharacter])

    useEffect(()=>{
            const newArray = saveCharacters.reduce((acc, item) => {
                if(!acc.some(obj => obj.id === item.id)){
                    acc.push(item)
               } 
               return acc
            },[])
            saveLocal(newArray)
    }, [saveCharacters])


    return (
        <CharacterContext.Provider
            value={{
                getCharacters, 
                getCharacter,
                saveCharacters,
                setSaveCharacters,
                setCallFetch, 
                setCharacters, 
                setDeleteCharacter,
            }}
        >
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider
