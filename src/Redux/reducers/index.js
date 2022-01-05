import {combineReducers} from 'redux'
import {characterReducer, charactersReducer, localStorageReducer} from '../reducers/characterReducer'

const reducers = combineReducers({
    allCharacters :charactersReducer,
    character: characterReducer,
    localCharacters: localStorageReducer
})

export default reducers