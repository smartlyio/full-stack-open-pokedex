import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useApi } from './useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

/*
The ci environment should be as close to the _production environment_ as possible.
You can run actions locally with act: https://github.com/nektos/act

You can check the available
runners here: https://docs.github.com/en/actions/reference/specifications-for-github-hosted-runners
*/
const mapResults = (({ results }) => results.map(({ url, name }) => ({
  url,
  name,
  id: parseInt(url.match(/\/(\d+)\//)[1])
})))

const App = () => {
  const { data: pokemonList, error, isLoading } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=784', mapResults)
  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList pokemonList={pokemonList} />
        </Route>
        <Route path="/pokemon/:name" render={(routeParams) => {
          const pokemonId = pokemonList.find(({ name }) => name === routeParams.match.params.name).id
          const previous = pokemonList.find(({ id }) => id === pokemonId - 1)
          const next = pokemonList.find(({ id }) => id === pokemonId + 1)
          return <PokemonPage pokemonList={pokemonList} previous={previous} next={next} />
        }} />
      </Switch>
    </Router>
  )
}

export default App
