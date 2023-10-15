import React from "react"
import { PokemonItem } from "./PokemonItem"

export const PokemonList = ({ pokemonList }) => {
  return (
    <div className="list-container">
      {pokemonList.map(({ id, name }) => (
        <PokemonItem key={id} id={id} name={name} />
      ))}
    </div>
  )
}

