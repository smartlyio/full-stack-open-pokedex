import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An Error occured: {error.toString()}</div>
)

export default ErrorMessage
