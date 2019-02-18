var express = require('express');
var router = express.Router();
var http = require('http');


http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);

// /* GET contact page. */
// router.get('/contact', function(req, res, next) {
//   res.render('contact', { title: 'Contact' });
// });

// module.exports = router;
