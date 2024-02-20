import React from 'react'
import PropTypes from 'prop-types';

const PokemonAbility = ({ abilityName }) => (
  <div className="pokemon-ability">
    <div className="pokemon-ability-type">Hidden ability</div>
    <div className="pokemon-ability-name">
      {abilityName}
    </div>
  </div>
)

PokemonAbility.propTypes = {
  abilityName: PropTypes.string.isRequired,
};

export default PokemonAbility
