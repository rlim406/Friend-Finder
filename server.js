var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var port = 7500;

app.listen(port, () => console.log("Listening on port:", port));