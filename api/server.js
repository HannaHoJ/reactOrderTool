var express = require('./config/express');
var mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();
app.listen(process.env.PORT, process.env.IP);
module.exports = app;

console.log('Server gestartet');
