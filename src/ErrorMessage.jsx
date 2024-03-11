import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occuredz3: {error.toString()}</div>
)

export default ErrorMessage
