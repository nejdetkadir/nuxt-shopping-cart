const { Router } = require('express')

const router = Router()

router.get("/", (req, res) => {
  res.end('Test API!')
})

module.exports = router
