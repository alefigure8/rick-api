import {actionTypes} from '../constants/actionTypes'
import characters from '../../api/characters'
import { numbers } from '../../Configs/configs'

// all characters
export const fetchCharacters = num => async dispatch => {
    const resultNumber =  await numbers(num)
    const response = await characters.get(`/character/${resultNumber}`) 
    dispatch({type: actionTypes.FETCH_CHARACTERS, payload: response.data})
}


// one characters
export const fetchCharacter = num => async dispatch => {
    const resultNumber =  await numbers(num)
    const response = await characters.get(`/character/${resultNumber}`) 
    dispatch({type: actionTypes.FETCH_CHARACTER, payload: response.data})
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