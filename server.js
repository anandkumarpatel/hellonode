var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('305');
});

app.listen(80);
