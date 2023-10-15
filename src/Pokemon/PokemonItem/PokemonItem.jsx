import React from "react"
import { Link } from "react-router-dom"

export const PokemonItem = ({ id, name }) => {
  return (
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
  )
}
