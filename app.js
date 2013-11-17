var express = require('express');
var stylus = require('stylus');
var app = express();
var path = require('path');

app.set('view engine', 'jade');
app.set("views", __dirname + "/views/");

app.use(express.static(__dirname + '/public'));

app.post('/', function(req, res) {
    //res.send('Hello from <a href="http://appfog.com">AppFog.com</a>');
    res.render('index', {sample:'fakevalue'});
});
app.get('/', function(req, res) {
    //res.send('Hello from <a href="http://appfog.com">AppFog.com</a>');
    res.render('index', {sample:'fakevalue'});
});

app.get('/friends', function(req, res){

	var fbsdk = require('facebook-node-sdk');

	var facebook_app_id = '1411854682381866';
	var facebook_app_secret = '77c637ca1dcad889fbedd216ddbff4a7';

	var Facebook = require('facebook-node-sdk');

	var couchbase = require('couchbase');

	var db = new couchbase.Connection({ bucket:'goldfish', host:'localhost:8091', password:'michael5'}, function(err) {
	  if (err) {
	    console.log('Connection Error', err);
	  } else {
	   db.get('player_11142090', function(err, result) {
	   	if (err) throw err;
	   		res.json(result);
	      // Doc Value: Hello World!
	    });
	  }
	});

	function errorHandler(from, e) {

	    console.log('Function: ' + from);
	    console.log(e.message);
	    console.log(e.stack);

	}

	/*
	facebook.api('/'+ facebook_app_id, function(data) {
	  res.json(data);
	});
	*/

});

app.listen(process.env.VCAP_APP_PORT || 3000);
