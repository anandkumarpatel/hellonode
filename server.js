var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('5');
});

app.listen(80);
