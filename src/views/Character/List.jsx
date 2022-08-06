import React from 'react'
import { useEffect, useState } from 'react'
import { getAllCharacters } from '../../services/futurapaApi'
import { useCharacter } from '../../context/CharacterContext'
import CharacterList from '../../components/CharacterList'


export default function List() {
    const { characters, setCharacters } = useCharacter([])
    const [loading, setLoading] = useState(true)
    
////go through each character and return that character with an id added onto it
    useEffect(() => {
        const loadCharacters = async() =>{
            const res = await getAllCharacters();
            const response = res.map((item, i) =>({
                ...item, id:i
            }))

            setCharacters(response);
            setLoading(false)
            };
        loadCharacters();
    }, []);

  return (
    <div>
          <h1>Characters
                {/* {loading && (<img src='https://i.gifer.com/2vDa.gif' alt="bender dancing"/>)} */}
            </h1>
            {<CharacterList characters={characters}/>}
            
    </div>
  )
}
