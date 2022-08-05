//first we need to fetch all the characters and export that out
//we need a response and we need that response to be json
//then return
export const getAllCharacters = async () => {
    const res = await fetch('futuramaapi.herokuapp.com/api/v2/characters')
    const allCharacters = await res.json();
    return allCharacters
}


//then we need to search the characters by their name
//this is so that we can grab the details page later
// need the response and the response to be in json
// just in case there are multiple characets with the same name, put it to sub 0
export const getCharacterSearch = async (name) =>{
    const res = await fetch(`futuramaapi.herokuapp.com/api/v2/characters?search${name}`)
    const oneCharacter = await res.json();
    return oneCharacter[0]
}