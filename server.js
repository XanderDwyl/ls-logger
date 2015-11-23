'use strict';

// Load third-party modules
var Rabbit = require('wascally');
var config = require('config');

// Local declarations
var settings = config.util.extendDeep({}, config.get('rabbitmq'));

Rabbit.configure(settings)
.then(function() {
  require('./db'),
  // Load service consumers
  require('./consumers');
})
.then(null, function(err) {
  setImmediate(function() {
    throw err;
  });
});

function exit(err) {
  Rabbit.closeAll()
  .then(function() {
    if (err) {
      throw err;
    }
  });
}

process.once('SIGINT', function() {
  exit(null);
});

process.on('unhandledException', function(err) {
  exit(err);
});
