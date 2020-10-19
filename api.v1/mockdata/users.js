const products = [
  {
    username: 'user1',
    password: 'pw1234',
    name: '회원 1',
  },
  {
    username: 'user2',
    password: 'pw1234',
    name: '회원 2',
  },
]

module.exports = products.map((e, id) => ({ ...e, id }))