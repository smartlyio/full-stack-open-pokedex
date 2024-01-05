import React from 'react'

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}, We apologize for any inconvinience caused, our team is fixing the issue and we would be back in no time.</div>
)

export default ErrorMessage
