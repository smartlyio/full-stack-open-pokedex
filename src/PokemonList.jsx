import React from 'react'
import { Link } from 'react-router-dom'


const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => (
        <Link key={id} to={`/pokemon/${name}`} className="list-item" style={{ backgroundImage: imageUrl(id) }}>
          <div
            className="list-item-name"
          >
            {name}
          </div>
        </Link>
      ))}
    </div>
  )
}

const imageUrl = ( id ) => {
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  return `url(${imageUrl})`
}

export default PokemonList
