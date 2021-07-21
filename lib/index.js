 
var express = require('express'); 
var http = require('http'); 

var app = express();

// all environments
app.set('port', process.env.PORT || 3000); 

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo');
});
server.listen(app.get('port'));