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
app.listen(process.env.VCAP_APP_PORT || 3000);
