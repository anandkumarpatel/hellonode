var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('ttt');
});

app.listen(80);
