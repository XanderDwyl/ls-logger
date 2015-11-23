'use strict';

// Load third-party modules
var config = require('../config/db');

// Load local modules
var LogHandler = require('../handlers/log-handler');

// Local declaration
var logHandler = new LogHandler({
  messageType: 'send-rec.logs.send'
});

// Logs Handler
// -------------
logHandler.consume(function(message, done) {
  var recipient = message.data;
  recipient.actionLink = config.get(message.emailType) + recipient.id;

});

module.exports = logHandler;
