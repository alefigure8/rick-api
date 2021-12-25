import {createContext, useEffect, useReducer, useState} from 'react'
import {getCharacterData, getCharacterDataName} from '../Configs/configs'

export const CharacterContext = createContext()

const types = {
    random: 'fetch-random',
    delete: 'delete-one',
    save: 'save-one',
    search: 'seatch-one'

}

const initialFetch = []

const fetchReducer = (state, action) => {
   switch(action.type){
        case types.random: {
            const result = async () => {
                return setCharacters(await getCharacterData(6))              
            }
            result()
        }
        case types.delete: {
            const result = async () => {
                setCharacter(await getCharacterData(1))
                return setCharacters(getCharacters.map(each => each.id === deleteCharacter ? getCharacter : each))  
            }
            result()  
        }
        case types.search: {
            const result = async () => {
                if(namecharacter !== ''){
                setSearchCharacter(await getCharacterDataName(namecharacter))
                if(searchCharacter.length > 0){
                    setCharacters(searchCharacter)
                }
                
            }
         }     
         result()  
        }
   }
}

export {initialFetch, fetchReducer, types}

const CharacterProvider = ({children}) => {
    const [getCharacters, setCharacters] = useState ([])
    const [getCharacter, setCharacter] = useState ([])
    const [callFetch, setCallFetch] = useState (false)
    const [deleteCharacter, setDeleteCharacter] = useState(0)
    const [searchCharacter,  setSearchCharacter] = useState([])
    const [namecharacter, setNameCharacter] = useState('')
    const [callSeacrhFetch, setCallSearchFetch] = useState (false)


    const [fetchState, fetchDispatch] = useReducer(fetchReducer, initialFetch)


    return (
        <CharacterContext.Provider
            value={{getCharacters, 
                    getCharacter, 
                    setCallFetch, 
                    setCharacters, 
                    setDeleteCharacter,
                    setNameCharacter,
                    setCallSearchFetch,

                    fetchState, 
                    fetchDispatch,
                    types
            }}
        >
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider
