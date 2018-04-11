const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const log4js = require('log4js');
const logger = log4js.getLogger();
logger.level = 'debug'; // default level is OFF - which means no logs at all.

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

const renderApp = () => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title></title>
</head>
<body>
  <h3>Hello from express</h3>
  <div id="app"></div>
</body>
</html>
`;

app.get('/render', function (req, res) {
  res.send(renderApp());
  logger.debug("GET hello !!!");
});

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`listening on port ${PORT} !!`);
});
