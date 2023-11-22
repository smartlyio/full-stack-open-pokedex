import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'

if (typeof document !== 'undefined') {
  ReactDOM.render(<App />, document.getElementById('app'))
}
