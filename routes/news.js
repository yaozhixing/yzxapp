var express = require('express');
var router = express.Router();

/* GET news listing. */
router.get('/',function(req,res,next){
	var data = require('../news.json')
	res.send(data)
})

module.exports = router;