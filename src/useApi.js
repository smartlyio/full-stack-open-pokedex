import { useEffect, useState } from 'react'
import axios from 'axios'

const useApi = (url, mapResults = (result) => result) => {

  const [
      data,
      setData
    ] = useState(),
    [
      isLoading,
      setIsLoading
    ] = useState(true),
    [
      error,
      setError
    ] = useState()
  useEffect(
    () => {

      setIsLoading(true)
      axios.
        get(url).
        then((response) => setData(mapResults(response.data))).
        catch(setError).
        finally(() => setIsLoading(false))

    },
    [url]
  )

  return { data,
    isLoading,
    error }

}

export { useApi }
