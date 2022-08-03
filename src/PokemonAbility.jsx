import React from 'react'

// eslint-disable-next-line react/prop-types
const PokemonAbility = ({ abilityName }) => (
	<div className="pokemon-ability">
		<div className="pokemon-ability-type">Hidden ability</div>
		<div className="pokemon-ability-name">
			{abilityName}
		</div>
	</div>
)

export default PokemonAbility
