import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid='error'>An error occured: {error.toString()}</div>
)

// No skip commit

export default ErrorMessage
