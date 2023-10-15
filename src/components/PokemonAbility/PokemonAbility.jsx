import React from "react";

export const PokemonAbility = ({ abilityName }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">Hidden ability</div>
    <div className="pokemon-ability-name">{abilityName}</div>
  </div>
);

