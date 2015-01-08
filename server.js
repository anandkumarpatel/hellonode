var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('120');
});

app.listen(80);
