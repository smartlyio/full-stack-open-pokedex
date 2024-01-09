const router = require('express').Router()

router.get('/health', (request, response) => {
  response.send('ok')
})

module.exports = router
