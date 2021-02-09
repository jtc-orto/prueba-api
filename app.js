'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var myLogger = function (req, res, next) {
  console.log('\n\n\n-------------------Nueva Peticion-----------------------------');
  console.log('Hora peticion:', new Date().toLocaleString());
  console.log('Contenido del Body\n', req.body);
//  console.log('key  body: ', Object.keys(req.body)[0]);
//  console.log('key  body PARSE: ', JSON.parse(Object.keys(req.body)[0]));
//  if (req.hasOwnPorperty('body.articulo')) {
//	if (req.body.articulo.tyc) {
//           console.log('Contenido de tallas\n', req.body.articulo.tallaje.tallas);
//	}
//  }
  console.log('OriginalURL: ',req.originalUrl);
  console.log('Direccion IP remota: ', req.ip);
  console.log('IPS: ', req.ips);
  console.log('Path: ', req.path);
  console.log('Hostname: ', req.hostname);
  console.log('Metodo: ', req.method);
  console.log('Parametros: ', req.params);
  console.log('Protocolo: ', req.protocol);
  console.log('Consulta: ', req.query);
  console.log('Routa: ', req.route);
  console.log('Host completo: ', req.headers.host);
  next();
};
var myLogger2 = function (req, res, next) {
  console.log('\n\n\n-------------------Nueva Peticion antes body parse-----------------------------');
  console.log('Hora peticion:', new Date().toLocaleString());
  console.log('Contenido del Body\n', req.body);
  console.log('Contenido de tallas\n', req.body.articulo.tallaje.tallas);
  console.log('OriginalURL: ',req.originalUrl);
  console.log('Direccion IP remota: ', req.ip);
  console.log('IPS: ', req.ips);
  console.log('Path: ', req.path);
  console.log('Hostname: ', req.hostname);
  console.log('Metodo: ', req.method);
  console.log('Parametros: ', req.params);
  console.log('Protocolo: ', req.protocol);
  console.log('Consulta: ', req.query);
  console.log('Routa: ', req.route);
  console.log('Host completo: ', req.headers.host);
  next();
};

// cargar archivos rutas
//var call_routes = require('./routes/call');
var event_routes = require('./routes/event');


// middlewares
//app.use(myLogger2);
app.use(bodyParser.urlencoded({extended:false}));
//app.use(myLogger2);
app.use(bodyParser.json());
app.use(myLogger);


// CORS

// rutas
app.use('/api', event_routes);


// exportar
module.exports = app;

