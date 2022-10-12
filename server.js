const http = require('http')
const app = require('./app')

const port = 5200

app.set('port', port)

const server = http.createServer(app)

server.listen(port)
