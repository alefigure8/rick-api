const MIN_CHARACTERS = 1
const MAX_CHARACTERS = 826

export function numbers(num) {
    let result =  ''
    for(let i = 0; i < num; i++){
       result +=  `,${Math.floor((Math.random() * MAX_CHARACTERS) + MIN_CHARACTERS)}`
    }
    return result.slice(1)
}