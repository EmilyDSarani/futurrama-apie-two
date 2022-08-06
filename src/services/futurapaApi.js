//first we need to fetch all the characters and export that out
//we need a response and we need that response to be json
//then return
export const getAllCharacters = async () => {
    const res = await fetch('https://futuramaapi.herokuapp.com/api/v2/characters')
    const characters = await res.json();
    console.log(characters)
    return characters
}


//then we need to search the characters by their name
//this is so that we can grab the details page later
// need the response and the response to be in json
// just in case there are multiple characets with the same name, put it to sub 0
export const getCharacterSearch = async (name) =>{
    const res = await fetch(`https://futuramaapi.herokuapp.com/api/v2/characters?search${name}`)
    const character = await res.json();
    return character[0]
}