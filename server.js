var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('2019');
});

app.listen(80);
