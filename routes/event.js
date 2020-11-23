'use strict'

var express = require('express');
var EventController = require('../controllers/event');

var router = express.Router();

router.post('/event', EventController.saveEvent);

module.exports = router;