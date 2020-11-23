'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


// cargar archivos rutas
//var call_routes = require('./routes/call');
var event_routes = require('./routes/event');


// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// CORS

// rutas
app.use('/api', event_routes);


// exportar
module.exports = app;