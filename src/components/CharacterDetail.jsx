import React from 'react'

export default function CharacterDetail({ character }) {
    const{Name, PicUrl, Species, Status} = character
  return (
    <div>
        <h1> {Name} </h1>
        <img src={PicUrl} alt={Name}/>
        <h2>{Species}</h2>
        <h3>{Status}</h3>
    </div>
  )
}
