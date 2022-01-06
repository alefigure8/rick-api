import {actionTypes} from '../constants/actionTypes'
import {saveLocal} from '../../Configs/localStorage'

const initialState = {
    characters: [],
    error: ''
}

// all characters
export const charactersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.FETCH_CHARACTERS:
                return {...state, characters: payload,  error: ''}   

        case actionTypes.FETCH_ONE_CHARACTER:{
            const {id, all, one} = payload
            const result = all.map(each => each.id === id ? one : each)
            return {...state, characters: result,  error: ''}
        }

        case actionTypes.SEARCH_CHARACTER: {
            if(payload === 'Character not found'){
                return {...state, characters:[], error: payload}
            }
            const newArray = payload.results.slice(0, 6)
            return {...state, characters: newArray, error: ''} 
        }

        default:
            return state
    }
}

// one characters
export const characterReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.FETCH_CHARACTER:
                return {...state, characters: payload}
        default:
            return state
    }
}

const initialStorage = {
   characters: JSON.parse(localStorage.getItem('characters')) ?? []
}

export const localStorageReducer = (state = initialStorage, {type, payload}) => {
    switch (type) {
        case actionTypes.LOCAL_STORAGE_CHARACTER:{
            const newArray = payload.reduce((acc, item) => {
                if(!acc.some(obj => obj.id === item.id)){
                    acc.push(item)
               } 
               return acc
            },[])
            saveLocal(newArray)
            return {...state, characters: newArray}}
        case actionTypes.LOCAL_STORAGE_DELETE: {
            const newArray = state.characters.filter(each => each.id !== payload)
            saveLocal(newArray)
            return {...state, characters: newArray}
        }
        default:
            return state
    }
}