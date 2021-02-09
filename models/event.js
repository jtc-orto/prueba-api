'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = Schema({
	uniqueID: String,
    calldate: String,
    type: String,
    subtype: String,
    src_extension: String,
    dst_dialed: String,
    dst_final: String,
    dstchannel: String,
    dst_extension: String,
    lastapp: String,
    disposition: String,
    evento: String,

});

module.exports = mongoose.model('Event', EventSchema);
