const http = require('http')
const app = require('./app')

const PORT = 5200


const server = http.createServer(app)

server.listen(process.env.PORT || PORT)
