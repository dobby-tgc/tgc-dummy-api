const path = require('path')
const JsonModel = require('../utils/json')

const Products = new JsonModel(path.join(__dirname, 'data'), 'products')

Products.init([
  {
    title: '상품명1',
    price: 12300,
    description: '설명..',
  },
  {
    title: '상품명2',
    price: 12300,
    description: '설명..',
  },
  {
    title: '상품명3',
    price: 12300,
    description: '설명..',
  },
])

module.exports = Products
