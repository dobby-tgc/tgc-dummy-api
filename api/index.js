const express = require('express')
const jwt = require('jsonwebtoken')

const router = express()

const Products = require('../models/Products')
const Users = require('../models/Users')

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  const user = Users.find((u) => u.username === username)
  if (!user) return res.status(401).json({ message: 'login failed' })
  if (user.password !== password) return res.status(401).json({ message: 'login failed' })
  const token = await jwt.sign({ user_id: user.id }, '1234', { expiresIn: '1h' })
  return res.json({ token })
})

router.get('/products', async (req, res) => {
  const products = await Products.find()
  return res.json(products)
})

router.post('/products', async (req, res) => {
  const { title, price } = req.body
  await Products.create({
    price: Number(price),
    title,
  })
  return res.json({})
})

router.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = Products.findOne(id)
  if (!product) return res.status(404).json({ message: 'not found' })
  return res.json(product)
})

setTimeout(() => {
  console.log('상품')
  Products.create({
    title: '좋은제품',
    price: 1,
  })
}, 2000)

module.exports = router
