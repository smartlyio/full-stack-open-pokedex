import React from 'react'
import { Link } from 'react-router-dom'

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => (
        <Link key={id} id={name} to={`/pokemon/${name}`} className="list-item">
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

export default PokemonList
