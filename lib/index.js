const express = require('express');
const routes = require('./routes'); 
const bodyParser = require('body-parser'); 
//crea un app de express
const app = express();

app.use((req, res, next) => {
    console.log('Middleware 1');
    next();
});
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
 

//uso de mildware
app.use((req, res, next) => {
    next();
});

//Inicia Routes
app.use('/auditoria', routes());
 
//Servidor y puerto
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3002;

app.listen(port, host, () => {
     console.log('Servidor funcionando correctamente en el puerto: ' + port);
});