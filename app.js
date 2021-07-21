 
//Servidor y puerto 
const port = process.env.PORT || 3002; 
'use strict';
const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo');
});
server.listen(port);