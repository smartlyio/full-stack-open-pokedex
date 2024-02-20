import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => (
        <Link key={id} to={`/pokemon/${name}`} className="list-item" style={{ backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})` }}>
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

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired,
};

export default PokemonList