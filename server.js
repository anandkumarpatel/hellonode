var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('2020');
});

app.listen(80);
