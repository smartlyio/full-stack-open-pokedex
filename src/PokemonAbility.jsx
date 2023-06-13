import React from 'react'

const PokemonAbility = ({ abilityName, abilityHidden }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">{abilityHidden ? 'Hidden' : 'Normal'} ability</div>
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

export default PokemonAbility
