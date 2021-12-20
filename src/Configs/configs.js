import axios from 'axios'

const MIN_CHARACTERS = 1
const MAX_CHARACTERS = 826

export async function getCharacterData ()  {
    const resultNumber =  await numbers()
    try {
        const urlCharacter = await `https://rickandmortyapi.com/api/character/${resultNumber}`
        const characters = await axios(urlCharacter)
        return characters.data
    } catch (error) {
        console.log(error)
    }
}

function numbers() {
    let result =  ''
    for(let i = 0; i < 6; i++){
       result +=  `,${Math.floor((Math.random() * MAX_CHARACTERS) + MIN_CHARACTERS)}`
    }
    return result.slice(1)
}