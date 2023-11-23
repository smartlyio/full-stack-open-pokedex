import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occurred: {error.toString()}</div>
)

export default ErrorMessage
