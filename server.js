var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('a97');
});

app.listen(80);
