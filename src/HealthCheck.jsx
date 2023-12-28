import React, { useState, useEffect } from 'react'
import axios from 'axios'

const HealthCheck = () => {
  const [healthStatus, setHealthStatus] = useState('')

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then(() => setHealthStatus('ok'))
      .catch(() => setHealthStatus('error'))
  }, [])

  return (
    <div>
      <h1>Health Check</h1>
      <p>Status: {healthStatus}</p>
    </div>
  )
}

export default HealthCheck