import axios from 'axios'

const MIN_CHARACTERS = 1
const MAX_CHARACTERS = 826

export async function getCharacterData (num)  {
    const resultNumber =  await numbers(num)
    try {
        const urlCharacter = await `https://rickandmortyapi.com/api/character/${resultNumber}`
        const characters = await axios(urlCharacter)
        return characters.data
    } catch (error) {
        console.log(error)
    }
}

function numbers(num) {
    let result =  ''
    for(let i = 0; i < num; i++){
       result +=  `,${Math.floor((Math.random() * MAX_CHARACTERS) + MIN_CHARACTERS)}`
    }
    return result.slice(1)
}