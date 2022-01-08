import {actionTypes} from '../constants/actionTypes'
import characters from '../../api/characters'
import { numbers } from '../../Configs/configs'

// all characters
export const fetchCharacters = num => async dispatch => {
    const resultNumber =  await numbers(num)
    const response = await characters.get(`/character/${resultNumber}`) 
    dispatch({type: actionTypes.CLEAN_STATE})
    dispatch({type: actionTypes.FETCH_CHARACTERS, payload: response.data})
}


// one characters
export const fetchCharacter = num => async dispatch => {
    const resultNumber =  await numbers(num)
    const response = await characters.get(`/character/${resultNumber}`) 
    dispatch({type: actionTypes.FETCH_CHARACTER, payload: response.data})
}

// search characters
export const fetchSearchCharacter = name => async dispatch => {
    try {
        const response = await characters.get(`/character/?name=${name}`)
         dispatch({type: actionTypes.SEARCH_CHARACTER, payload: response.data})
    } catch (error) {
        dispatch({type: actionTypes.SEARCH_CHARACTER, payload: 'Character not found'})
    }
}

// pagination
export const paginationCharacter = url => async dispatch => {
    const response = await characters.get(`${url}`)
    dispatch({type: actionTypes.CLEAN_STATE})
    dispatch({type: actionTypes.PAGINATION_CHARACTER, payload: response.data})
}


// delete character
export const deleteCharacter = (id, all, one)  => {
      return {
          type: actionTypes.FETCH_ONE_CHARACTER, 
          payload:{ id, all, one}
        }
}

// local storage
export const localStorageCharacters = character => {
    return {
        type: actionTypes.LOCAL_STORAGE_CHARACTER,
        payload: character
    }
}

export const deleteLocalStorageCharacter = id => {
    return {
        type: actionTypes.LOCAL_STORAGE_DELETE,
        payload: id
    }
}