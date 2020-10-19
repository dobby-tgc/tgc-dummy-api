const express = require('express')
const app = express()

const apiv1 = require('./api.v1')


app.use(express.json())

app.use('/api/v1', apiv1)

module.exports = app