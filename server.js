const http = require('http');
const app = require('./backend/app')
const port = process.env.PORT || 3000;

app.set('port', port) // set config
const server = http.createServer(app);

server.listen(port);
console.log('listening on port ' + port)

