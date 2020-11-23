'use strict'
var Event = require('../models/event');

var controller = {
	saveEvent: function(req, res){
		var event = new Event();
		var params = req.body;
		event.uniqueid = params.uniqueid;
		event.evento = JSON.stringify(params);

		if(params.token != "nic8w9rch9tywer93wy") return res.status(401).send({message: 'El token enviado no esta autorizado'});

		event.save((err, eventStored) => {
			if(err) return res.status(500).send({message: 'Error al guradar'});
			if(!eventStored) return res.status(404).send({message: 'no se a podido guardar'});
			return res.status(200).send({evento: eventStored});
		});
	}
};

module.exports = controller;