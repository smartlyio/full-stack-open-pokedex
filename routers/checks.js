const router = require('express').Router()

router.get('/health', (request, response) => {
  response.status(500).json({ error: 'internal error' })
})

module.exports = router
