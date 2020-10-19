const path = require('path')
const JsonModel = require('../utils/json')

const Users = new JsonModel(path.join(__dirname, 'data'), 'users')

Users.init([
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
])

module.exports = Users
