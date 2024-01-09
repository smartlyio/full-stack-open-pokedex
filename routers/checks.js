const express = require('express')
const router = express.Router()

router('/health', (request, response) => {
  throw new Error('ERROR')

  // eslint-disable-next-line no-unreachable
  response.send('OK')
})

module.exports = router
