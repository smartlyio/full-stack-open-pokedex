import { useEffect, useState } from 'react'
import axios from 'axios'

const useApi = (url, mapResults = (result) => result) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url)
      .then(response => setData(mapResults(response.data)))
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [url])
  axios.get('/health', (req, res) => {
    res.send('ok')
  })

  axios.get('/version', (req, res) => {
    res.send('1') // change this string to ensure a new version deployed
  })
  return { data, isLoading, error }
}

export { useApi }
