const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

// Create express instance
const app = express()

// Require API routes
const items = require('./routes/items')
const cart = require('./routes/cart')

app.use(bodyParser.json())
app.use(session({
  secret: 'nuxt-shopping-cart'
}))

// Import API Routes
app.use('/items', items)
app.use('/cart', cart)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
