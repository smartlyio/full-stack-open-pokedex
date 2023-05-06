import React from 'react'

function ErrorMessage ({ error }) {

  return <div data-testid="error">
An error occured:{error.toString()}</div>

}

export default ErrorMessage
