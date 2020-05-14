import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useApi } from './useApi'
import Loader from './Loader'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const mapResults = (({ results }) => results.map(({ url, name }) => ({
  url,
  name,
  id: parseInt(url.match(/\/(\d+)\//)[1])
})))

const App = () => {
  const { data: pokemons, error, isLoading } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=784', mapResults)
  if (isLoading) {
    return <Loader />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList pokemons={pokemons} />
        </Route>
        <Route path="/pokemon/:name">
          <PokemonPage pokemons={pokemons} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
