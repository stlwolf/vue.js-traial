const log4js = require('log4js');
const logger = log4js.getLogger();

let app = require('express')();

app.get('/', function (req, res) {
  res.send('GET API hello');
  logger.debug("GET hello !!!");
});

app.listen(8080);
