var express = require('express');
var router = express.Router();
var http = require('http');

  router.get('/contact', function(req, req, next){
    res.render('contact', { title: 'this is the contact page'});
  });


        // http.createServer(function (req, res) {
        //   res.write('Hello World!'); //write a response to the client
        //   res.end(); //end the response
        // }).listen(8080);

        // /* GET contact page. */
        // router.get('/contact', function(req, res, next) {
        //   res.render('contact', { title: 'Contact' });
        // });
module.exports = router;
