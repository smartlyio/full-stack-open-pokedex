const router = require('express').Router()

router.get('/health', (request, response) => {
  response.send('OK')
})

module.exports = router
