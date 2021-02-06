const { Router } = require('express')

const router = Router()

router.get("/", (req, res) => {
  let cart = req.session.cart ? req.session.cart : []
  let totalPrice = 0.0
  cart.forEach(i => {
    totalPrice+=i.totalPrice
  })

  res.status(200).json({
    totalPrice,
    cart,
    items: [
      {
        id: 1,
        name: 'Broccoli',
        price: 9
      },
      {
        id: 2,
        name: 'Carrot',
        price: 14
      },
      {
        id: 3,
        name: 'Corn',
        price: 7
      },
      {
        id: 4,
        name: 'Cucumber',
        price: 18
      },
      {
        id: 5,
        name: 'Eggplant',
        price: 11
      },
      {
        id: 6,
        name: 'Leeks',
        price: 19
      },
      {
        id: 7,
        name: 'Onion',
        price: 15
      },
      {
        id: 8,
        name: 'Pumpkin',
        price: 6
      },
      {
        id: 9,
        name: 'Tomato',
        price: 10
      },
      {
        id: 10,
        name: 'Apple',
        price: 7
      },
      {
        id: 11,
        name: 'Pizza',
        price: 30
      },
      {
        id: 12,
        name: 'Yogurt',
        price: 28
      },
      {
        id: 13,
        name: 'Eggs',
        price: 19
      }
    ]
  })
})

module.exports = router

