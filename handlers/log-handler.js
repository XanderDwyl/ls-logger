'use strict';

// Load core modules
var util = require('util');

// Load third-party modules
var Rabbus = require('rabbus');
var Rabbit = require('wascally');

function LogHandler(options) {
  Rabbus.Receiver.call(this, Rabbit, {
    exchange: 'send-rec.logs-exchange',
    queue: 'send-rec.logs-queue',
    routingKey: 'send-rec.logs-key',
    messageType: options.messageType
  });

  console.log('waiting for request:', options.messageType);
}

util.inherits(LogHandler, Rabbus.Receiver);

module.exports = LogHandler;
