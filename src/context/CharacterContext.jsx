// according to the docs "Context provides a way to pass data through the component tree without having to pass props down manually at every level."
//so, if we just keep the characters in context from the get go, then we dont have to worry about how to pass them down

import { useContext, createContext, useState } from "react";

//first create the context
const CharacterContext = createContext();

const CharacterProvider = ({ children }) => {
    //then create our character
    const [characters, setCharacters] = useState([]); 

    //pass the children through the provider with the state value
    return <CharacterContext.Provider value={{characters, setCharacters}}>{children}</CharacterContext.Provider>
}

//we need to use the custom hook so that we can store the useContext inside of the use by creating a function. 
const useCharacter = () =>{
    const context = useContext(CharacterContext)

    if(context === undefined){
        throw new Error('useCharacter needs to be defined in the CharacterContext provider')
    }
    return context
}

export {CharacterProvider, useCharacter}