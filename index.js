const express = require('express');
const app = express();

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug'; // default level is OFF - which means no logs at all.

app.get('/', function (req, res) {
  res.send('GET API hello');
  logger.debug("GET hello !!!");
});

app.listen(8080);
