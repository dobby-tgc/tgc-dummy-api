const http = require('http')
const app = require('./app')

const PORT = 8000

http.createServer(app).listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})