var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('ttt1');
});

app.listen(80);
