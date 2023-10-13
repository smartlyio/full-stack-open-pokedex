import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorMessage, LoadingSpinner } from "./components";
import { PokemonList } from "./Pokemon";
import { mapResults } from "./utils";
import { useApi } from "./hooks";
import PokemonPage from "./PokemonDetails";

const App = () => {
  const {
    data: pokemonList,
    error,
    isLoading,
  } = useApi("https://pokeapi.co/api/v2/pokemon/?limit=50", mapResults);

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
            const pokemonId = pokemonList.find(
              ({ name }) => name === routeParams.match.params.name
            ).id;

            const previous = pokemonList.find(({ id }) => id === pokemonId - 1);

            const next = pokemonList.find(({ id }) => {
              const nextPokemon = pokemonId + 1;
              return id === nextPokemon;
            });

            return (
              <PokemonPage
                pokemonList={pokemonList}
                previous={previous}
                next={next}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
};

export default App;
