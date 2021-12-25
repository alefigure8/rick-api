import { getCharacterData } from "../Configs/configs"

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
                setCharacters(await getCharacterData(6))
                setCallFetch(false)
                
            }
            result()
        }
   }
}

export {initialFetch, fetchReducer, types}