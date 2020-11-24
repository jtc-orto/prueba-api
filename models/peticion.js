'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PeticionSchema = Schema({
	uniqueid: String,
    date: String,
    evento: String,

});

module.exports = mongoose.model('Peticion', PeticionSchema);
