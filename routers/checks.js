const express = require('express')
const router = express.Router()

router('/health', (request, response) => {
  response.send('OK')
})

module.exports = router
