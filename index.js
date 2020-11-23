'use strict'

var mongoose = require('mongoose');
var app = require('./app.js');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/centralitaip', { useNewUrlParser: true,  useUnifiedTopology: true })
		.then(() => {
			console.log("conexion a la base de datos correctamente");	

			//creacion del servidor
			app.listen(port,() => {
				console.log("Servidor corriendo correctamente en localhost:3700");
			})
		})
		.catch(err => console.log(err));