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

app.post('/friends', function(req, res){
	var fbsdk = require('facebook-sdk');
	var facebook_app_id = '1411854682381866';
	var facebook_app_secret = '77c637ca1dcad889fbedd216ddbff4a7';

	var facebook = new fbsdk.Facebook({
	  appId  : facebook_app_id,
	  secret : facebook_app_secret
	});

	facebook.api('/'+ facebook_app_id, function(data) {
	  console.log(data);
	});
});

app.listen(process.env.VCAP_APP_PORT || 3000);
