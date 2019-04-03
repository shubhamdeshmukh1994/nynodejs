var express = require('express');
var router = express.Router();

router.get('/',function(req, res, next){
	res.render('aboutus',{title: 'This is about Us page'});
});
module.exports = router;