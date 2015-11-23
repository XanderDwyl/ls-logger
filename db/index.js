'use strict';
var Mongoose = require('mongoose');
var config = require('./config');
var db = Mongoose.connection;

Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});

exports.Mongoose = Mongoose;
exports.db = db;