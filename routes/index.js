var express = require('express');
var router = express.Router();

var linkList = require('../public/data').linkList;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'homepage', nav: linkList });
});

module.exports = router;
