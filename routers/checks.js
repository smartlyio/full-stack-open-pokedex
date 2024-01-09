const router = require('express').Router()

router.get('/health', (request, response) => {
  throw new Error('...ERROR')

  // eslint-disable-next-line no-unreachable
  response.send('OK')
})

module.exports = router
