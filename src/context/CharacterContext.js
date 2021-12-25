import {createContext, useEffect, useState} from 'react'
import {getCharacterData, getCharacterDataName} from '../Configs/configs'

export const CharacterContext = createContext()

const CharacterProvider = ({children}) => {
    const [getCharacters, setCharacters] = useState ([])
    const [getCharacter, setCharacter] = useState ([])
    const [callFetch, setCallFetch] = useState (false)
    const [deleteCharacter, setDeleteCharacter] = useState(0)
    const [searchCharacter,  setSearchCharacter] = useState([])
    const [namecharacter, setNameCharacter] = useState('')
    const [callSeacrhFetch, setCallSearchFetch] = useState (false)


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
    }, [deleteCharacter])

    useEffect( () => {
       
        const result = async () => {
            if(namecharacter !== ''){
            // axios
            setSearchCharacter(await getCharacterDataName(namecharacter))
            console.log(searchCharacter)
            if(searchCharacter.length > 0){
                setCharacters(searchCharacter)
            }
            
        }
     }     

     result()  
     setCallSearchFetch(false)
     setNameCharacter('')
     setSearchCharacter([])
      
    }, [callSeacrhFetch])


    return (
        <CharacterContext.Provider
            value={{getCharacters, 
                    getCharacter, 
                    setCallFetch, 
                    setCharacters, 
                    setDeleteCharacter,
                    setNameCharacter,
                    setCallSearchFetch
            }}
        >
            {children}
        </CharacterContext.Provider>
    )
}

export default CharacterProvider
