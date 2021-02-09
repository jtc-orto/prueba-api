'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = Schema({
	uniqueid: String,
    caller: String,
    callee: String,
    destination_type: String,
    queue_number: String,
    queue_name: String,
    queue_status: String,
    monitor_filename: String,
    date: String,
    evento: String,
});

module.exports = mongoose.model('Event', EventSchema);
