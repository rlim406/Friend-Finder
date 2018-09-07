var express = require('express');

var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 7500;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, () => console.log("Listening on port:", port));

require(path.join(__dirname, './app/routing/apiRoutes'))(app);

require(path.join(__dirname, './app/routing/htmlRoutes'))(app);