import '@testing-library/jest-dom/extend-expect'
import { render, waitFor } from '@testing-library/react'
import axiosMock from 'axios'
import React from 'react'
import { act } from 'react-dom/test-utils'
import App from '../src/App'

jest.mock('axios')

describe('<App />', () => {
  it('fetches data', async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        results: [
          {
            url: 'https://pokeapi.co/api/v2/pokemon/1/',
            name: 'bulbasaur',
            id: 1,
          },
        ],
      },
    })
    await act(async () => {
      render(<App />)
    })
    expect(axiosMock.get).toHaveBeenCalledTimes(1)
    expect(axiosMock.get).toHaveBeenCalledWith(
      'https://pokeapi.co/api/v2/pokemon/?limit=50'
    )
  })

  it('shows LoadingSpinner', async () => {
    axiosMock.get.mockResolvedValueOnce({})
    const { getByAltText } = render(<App />)
    await waitFor(() => {
      expect(getByAltText('Loading...')).toBeVisible()
    })
  })

  it('shows error', async () => {
    axiosMock.get.mockRejectedValueOnce(new Error())
    const { getByTestId } = render(<App />)
    await waitFor(() => {
      expect(getByTestId('error')).toBeVisible()
    })
  })
})
