
function saveLocal (character){
    localStorage.setItem('characters', JSON.stringify(character))
}


async function getLocal (){
   return await JSON.parse(localStorage.getItem('characters'))
}


export {saveLocal, getLocal}