/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => (
        <Link
          key={id}
          to={`/pokemon/${name}`}
          className="list-item"
          style={{
            backgroundImage: `url(${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`})`,
          }}
        >
          <div className="list-item-name">{name}</div>
        </Link>
      ))}
      <h1>Heavy weight on heart</h1>
    </div>
  );
};

export default PokemonList;
