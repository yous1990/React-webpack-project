var express = require('express');
var vbRouter = require('./routes/vb').router;

var app = require('express')();
var server = require('http').Server(app);


app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use('/vb', vbRouter);


app.use('/', express.static(__dirname));
//app.use('/', express.static(__dirname + '/webapp'));


server.listen(3000);