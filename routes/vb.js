var express = require('express');
var router = express.Router();




/*******************************************************************/
/******************************* GET ******************************/
/*******************************************************************/

// define the get route
router.get('/', function (req, res) {
	var generatedValue = Math.floor(Math.random() * (1 - 0 +1)) + 0;
	setTimeout(function() {
		res.send({"value": generatedValue});
	}, 1000);
});


module.exports = {
	router: router
};