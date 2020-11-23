'use strict'

var controller = {
	home: function(req, res){
		return res.status(200).send({
			message: 'Pagina principal'
		});

	},
	test: function(req, res){
		return res.status(200).send({
			message: 'mensaje de prueba'
		});
	}
};

module.exports = controller;