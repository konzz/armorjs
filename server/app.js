'use strict';

var express = require('express');
var app = express();

app.listen(8080);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});

app.use('/js', express.static(__dirname + '/client/js'));
app.use('/css', express.static(__dirname + '/client/css'));