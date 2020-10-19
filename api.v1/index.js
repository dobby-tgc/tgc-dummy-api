const express = require('express')
const jwt = require('jsonwebtoken')

const router = express()

const products = require('./mockdata/products')
const users = require('./mockdata/users')

router.post('/login', async (req,res) => {
  const { username, password } = req.body
  const user = users.find((u) => u.username === username)
  if (!user) return res.status(401).json({ message: 'login failed' })
  if (user.password !== password) return res.status(401).json({ message: 'login failed' })
  const token = await jwt.sign({ user_id: user.id }, '1234', { expiresIn: '1h' })
  return res.json({ token })
})

router.get('/products', (req, res) => {
  res.json(products)
})

router.get('/products/:id', (req, res) => {
  const { id } = req.params
  const product = products.find(e => e.id === id)
  if (!product) return res.status(404).json({ message: 'not found' })
  return res.json(product)
})

module.exports = router
