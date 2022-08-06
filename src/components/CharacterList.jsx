import React from 'react'
import { Link } from 'react-router-dom'

export default function CharacterList({ characters }) {
  return (
    <div>
          <ul aria-label="characters" >
            {characters.map((character ) =>(
                <li key={character.Name}>
                    <Link to={`/characters/${character.Name}`}>
                            <img src={character.PicUrl}
                                alt={character.Name} />
                            <button><h1>{character.Name}</h1></button>
                    </Link>   
                </li>
            ))}
        </ul>
    </div>
  )
}
