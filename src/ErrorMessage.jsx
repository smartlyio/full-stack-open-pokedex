import React from 'react'

const ErrorMessage = ({ error }) => (
  <div>An error occured: {error.toString()}</div>
)

export default ErrorMessage
