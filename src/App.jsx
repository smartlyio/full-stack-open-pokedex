import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import ErrorMessage from './ErrorMessage'
import LoadingSpinner from './LoadingSpinner'
import PokemonList from './PokemonList'
import PokemonPage from './PokemonPage'
import { useApi } from './useApi'

const mapResults = ({ results }) =>
  results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url.match(/\/(\d+)\//)[1]),
  }))

const App = () => {
  const {
    data: pokemonList,
    error,
    isLoading,
  } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=50', mapResults)
  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  return (
    <Router>
      <Routes>
        <Route
          exact
          path='/'
          element={<PokemonList pokemonList={pokemonList} />}
        />
        <Route
          path='/pokemon/:name'
          element={<PokemonPage pokemonList={pokemonList} />}
        />
      </Routes>
    </Router>
  )
}

export default App
