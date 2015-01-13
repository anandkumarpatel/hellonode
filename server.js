var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('2007');
});

app.listen(80);
