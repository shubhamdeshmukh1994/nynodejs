var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send("work 1");
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
module.exports = router;