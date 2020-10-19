const express = require('express')

const app = express()

const api = require('./api')

app.use(express.json())

app.use('/api', api)

module.exports = app
