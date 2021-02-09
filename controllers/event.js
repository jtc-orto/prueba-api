'use strict'
var Event = require('../models/event');
var Peticion = require('../models/peticion');

var controller = {
	saveEvent: function(req, res){
		var event = new Event();
		var params = req.body;
		event.uniqueID = params.uniqueID;
		event.caller = params.caller;
		event.callee = params.callee;
		event.destination_type = params.destination_type;
		event.queue_number = params.queue_number;
		event.queue_name = params.queue_name;
		event.queue_status = params.queue_status;
		event.monitor_filename = params.monitor_filename;
		event.date = params.date;
		event.evento = JSON.stringify(params);

		if(params.token != "nic8w9rch9tywer93wy") {
			var peticion = new Peticion();
			peticion.uniqueID = params.uniqueID;
			peticion.date = new Date().toLocaleString();
			peticion.evento = JSON.stringify(params);
			peticion.save();
			return res.status(401).send({message: 'El token enviado no esta autorizado'});
		}
		event.save((err, eventStored) => {
			if(err) return res.status(500).send({message: 'Error al guradar'});
			if(!eventStored) return res.status(404).send({message: 'no se a podido guardar'});
			return res.status(200).send({evento: eventStored});
		});
	}
};

module.exports = controller;