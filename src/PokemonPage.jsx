import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from './Loader'
import { useApi } from './useApi'
import ErrorMessage from './ErrorMessage'

const PokemonPage = ({ pokemonList }) => {
  const { name } = useParams()
  const { data: pokemon, error, isLoading } = useApi(`https://pokeapi.co/api/v2/pokemon/${name}`)

  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  const { type } = pokemon.types.find((type) => type.slot === 1)
  const stats = pokemon.stats.map((stat) => ({
    name: stat.stat.name.replace('-', ' '),
    value: stat.base_stat
  })).reverse()
  const normalAbility = pokemon.abilities.find((ability) => !ability.is_hidden)
  const hiddenAbility = pokemon.abilities.find((ability) => ability.is_hidden === true)
  const previous = pokemonList.find(({ id }) => id === pokemon.id - 1)
  const next = pokemonList.find(({ id }) => id === pokemon.id + 1)

  return (
    <>
      <div className="links">
        {previous && <Link to={`/pokemon/${previous.name}`}>Previous</Link>}
        <Link to="/">Home</Link>
        {next && <Link to={`/pokemon/${next.name}`}>Next</Link>}
      </div>
      <div className={`pokemon-page pokemon-type-${type.name}`}>
        <div className="pokemon-image" style={{ backgroundImage: `url(${pokemon.sprites.front_default})` }} />
        <div className="pokemon-info">
          <div className="pokemon-name">{pokemon.name}</div>
          <div className="pokemon-stats" data-testid="stats">
            <table>
              <tbody>
                {stats.map(({ name, value }) => (
                  <tr key={name}>
                    <td className="pokemon-stats-name">{name}</td>
                    <td className="pokemon-stats-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pokemon-abilities">
            {normalAbility && (
              <div className="pokemon-ability">
                <div className="pokemon-ability-type">Ability</div>
                <div className="pokemon-ability-name">
                  {normalAbility.ability.name.replace('-', ' ')}
                </div>
              </div>
            )}
            {hiddenAbility && (
              <div className="pokemon-ability">
                <div className="pokemon-ability-type">Hidden ability</div>
                <div className="pokemon-ability-name">
                  {hiddenAbility.ability.name.replace('-', ' ')}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default PokemonPage
