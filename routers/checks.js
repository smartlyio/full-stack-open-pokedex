const router = require('express').Router()

router.get('/health', (request, response) => {
  // eslint-disable-next-line no-unreachable
  response.status(500).json({ error: 'internal error' })
})

module.exports = router
