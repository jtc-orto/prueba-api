'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CallSchema = Schema({
	uniqueID: String,
    calldate: String,
    seat: String,
    departament: String,
    src: String,
    dst: String,
    duration: Number,
    billsec: Number,
    type: String,
    subtype: String,
    src_extension: String,
    dst_dialed: String,
    dst_final: String,
    dstchannel: String,
    dst_extension: String,
    lastapp: String,
    disposition: String,
    xfer: Number,
    xfer_extension: String,
    record_file: String,
    record_hash: String
});

module.exports = mongoose.model('Call', CallSchema);
