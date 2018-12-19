var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;

app.use(express.static(path.join(__dirname, 'src')));

app.listen(PORT);
console.log('Listening on port ' + PORT);