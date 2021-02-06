const { Router } = require('express')

const router = Router()

router.post("/add", (req, res) => {
  let cart = req.session.cart ? req.session.cart : []
  let index = cart.findIndex(value => value.id === req.body.item.id) // check item

  if (index >= 0) {
    cart[index].count += req.body.item.count
    cart[index].totalPrice = cart[index].count * cart[index].price
  } else {
    cart.push({
      ...req.body.item,
      totalPrice: req.body.item.count * req.body.item.price
    })
  }
  req.session.cart = cart // set cart to session

  let totalPrice = 0.0
  cart.forEach(i => {
    totalPrice+=i.totalPrice
  })

  res.status(200).json({
    cart,
    totalPrice
  })
})

router.post('/change', (req, res, next) => {
  let cart = req.session.cart ? req.session.cart : []
  let index = cart.findIndex(value => value.id === req.body.item.id) // check item

  req.body.type ? cart[index].count++ : cart[index].count--
  if (cart[index].count <= 0) {
    cart.splice(index)
  } else {
    cart[index].totalPrice = cart[index].count * cart[index].price
  }

  req.session.cart = cart // set cart to session

  let totalPrice = 0.0
  cart.forEach(i => {
    totalPrice+=i.totalPrice
  })

  res.status(200).json({
    cart,
    totalPrice
  })
})

module.exports = router
