
function saveLocal (character){
    localStorage.setItem('characters', JSON.stringify(character))
}

export {saveLocal}