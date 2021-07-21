 
var express = require('express'); 
var http = require('http'); 

var app = express();

// all environments
app.set('port', process.env.PORT || 3000); 

const server = http.createServer(function () {  
});
server.listen(app.get('port'), () => {
    console.log('Servidor funcionando correctamente en el puerto: ' + app.get('port'));
});