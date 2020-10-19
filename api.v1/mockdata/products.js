const products = [
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
]

module.exports = products.map((e, id) => ({ ...e, id }))