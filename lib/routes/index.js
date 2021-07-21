const express = require('express');
const router = express.Router();
 
const mantAuditoriaRxBusiness   = require('../business/MantAuditoriaRxBusiness');    

module.exports = function(){
 
    router.get('/', mantAuditoriaRxBusiness.consultarAuditoria);    

    return router;
}

