import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occuredz: {error.toString()}</div>
)

export default ErrorMessage
