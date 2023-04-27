import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import axiosMock from 'axios'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import PokemonPage from '../src/PokemonPage'

jest.mock('axios')

const previous = {
  url: 'https://pokeapi.co/api/v2/pokemon/132/',
  name: 'ditto',
  id: 132,
}

const next = {
  url: 'https://pokeapi.co/api/v2/pokemon/134/',
  name: 'vaporeon',
  id: 134,
}

const pokemonItem = {
  id: 133,
  abilities: [
    {
      ability: {
        name: 'anticipation',
        url: 'https://pokeapi.co/api/v2/ability/107/',
      },
      is_hidden: true,
      slot: 3,
    },
    {
      ability: {
        name: 'adaptability',
        url: 'https://pokeapi.co/api/v2/ability/91/',
      },
      is_hidden: false,
      slot: 2,
    },
  ],
  name: 'eevee',
  stats: [
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 55,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'normal',
        url: 'https://pokeapi.co/api/v2/type/1/',
      },
    },
  ],
  sprites: { front_default: 'URL' },
}

const pokemonList = [previous, pokemonItem, next]

const renderPokemonPage = (pokemonItem) => {
  axiosMock.get.mockResolvedValueOnce({ data: pokemonItem })
  return act(async () => {
    render(
      <MemoryRouter initialEntries={[`/pokemon/${pokemonItem.name}`]}>
        <Routes>
          <Route
            path='/pokemon/:name'
            element={<PokemonPage pokemonList={pokemonList} />}
          />
        </Routes>
      </MemoryRouter>
    )
  })
}

describe('<PokemonPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render abilities', async () => {
    await renderPokemonPage(pokemonItem)

    expect(screen.getByText('adaptability')).toBeVisible()
    expect(screen.getByText('anticipation')).toBeVisible()
  })

  it('should render stats', async () => {
    await renderPokemonPage(pokemonItem)

    expect(screen.getByTestId('stats')).toHaveTextContent('hp55attack55')
  })

  it('should render previous and next urls if they exist', async () => {
    await renderPokemonPage(pokemonItem)

    expect(screen.getByText('Previous').getAttribute('href')).toBe(
      '/pokemon/ditto'
    )
    expect(screen.getByText('Next').getAttribute('href')).toBe(
      '/pokemon/vaporeon'
    )
  })

  it('should not render previous if it’s the first pokemon in the list', async () => {
    await renderPokemonPage({
      ...pokemonItem,
      ...previous,
    })

    expect(screen.queryByText('Previous')).toBeNull()
  })

  it('should not render next if it’s the last pokemon in the list', async () => {
    await renderPokemonPage({
      ...pokemonItem,
      ...next,
    })

    expect(screen.queryByText('Next')).toBeNull()
  })
})
