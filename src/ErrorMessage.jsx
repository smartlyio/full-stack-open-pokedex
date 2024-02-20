import React from 'react'
import PropTypes from 'prop-types';

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

const ErrorMessage = ({ error }) => (
  <div data-testid="error">An error occured: {error.toString()}</div>
)

export default ErrorMessage
