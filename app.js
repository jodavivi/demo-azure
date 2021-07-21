 
var express = require('express'); 
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000); 
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
 
 
http.createServer(app).listen(app.get('port'), function(req, res){
    console.log('Express server listening on port ' + app.get('port'));
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo');
});
 