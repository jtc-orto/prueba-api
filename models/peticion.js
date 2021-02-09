'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeticionSchema = Schema({
	uniqueID: String,
    date: String,
    evento: String,

});

module.exports = mongoose.model('Peticion', PeticionSchema);
