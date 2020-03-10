var express = require('express');
var Dog = require('../models/Dog');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', null);
});

module.exports = router;
