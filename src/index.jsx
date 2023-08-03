import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

const root = document.getElementById('app')

if (root !== null) {
  ReactDOM.createRoot(root).render(<App />)
}
