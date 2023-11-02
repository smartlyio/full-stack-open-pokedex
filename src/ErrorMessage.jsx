import React from 'react'

// eslint-disable-next-line react/prop-types
const ErrorMessage = ({ error }) => (
	<div data-testid="error">An error occured: {error.toString()}</div>
)

export default ErrorMessage
