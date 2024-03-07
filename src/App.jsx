import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useApi } from './useApi';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import PokemonPage from './PokemonPage';
import PokemonList from './PokemonList';

const mapResults = (results) =>
  results.map(({ url, name }) => ({
    url,
    name,
    id: parseInt(url.match(/\/(\d+)\//)[1])
  }));

const App = () => {
  const { data: pokemonList, error, isLoading } = useApi(
    'https://pokeapi.co/api/v2/pokemon/?limit=50',
    mapResults
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList pokemonList={pokemonList} />
        </Route>
        <Route
          path="/pokemon/:name"
          render={(routeParams) => {
            const pokemon = pokemonList.find(
              (pokemon) => pokemon.name === routeParams.match.params.name
            );
            if (!pokemon) {
              return <div>Pokemon not found</div>; // Handle case when pokemon is not found
            }
            const pokemonId = pokemon.id;
            const previous = pokemonList.find(({ id }) => id === pokemonId - 1);
            const next = pokemonList.find(({ id }) => id === pokemonId + 1);
            return (
              <PokemonPage pokemon={pokemon} previous={previous} next={next} />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
