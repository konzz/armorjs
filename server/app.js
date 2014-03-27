'use strict';

var express = require('express');
var app = express();

app.listen(8080);

app.get('/', function(req, res){
  res.sendfile(__dirname + '/index.html');
});
app.use(express.logger('dev'));
app.use('/', express.static(__dirname + '/../client'));

console.log('Server listening at localhost:8080');