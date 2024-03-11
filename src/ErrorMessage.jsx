import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occuredz4: {error.toString()}</div>
)

export default ErrorMessage
