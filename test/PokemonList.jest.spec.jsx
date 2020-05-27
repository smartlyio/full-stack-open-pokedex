import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import PokemonList from '../src/PokemonList'


const pokemons = [{
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  name: 'bulbasaur',
  id: 1
}, {
  url: 'https://pokeapi.co/api/v2/pokemon/133/',
  name: 'eevee',
  id: 133
}]

describe('<PokemonList />', () => {
  it('should render items', () => {
    render(
      <BrowserRouter>
        <PokemonList pokemons={pokemons} />
      </BrowserRouter>
    )
    expect(screen.getByText('bulbasaur')).toBeVisible()
    expect(screen.getByText('eevee')).toBeVisible()
  })
})
