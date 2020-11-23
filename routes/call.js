'use strict'

var express = require('express');
var CallController = require('../controllers/call');

var router = express.Router();

router.get('/home', CallController.home);
router.get('/test', CallController.test);

module.exports = router;