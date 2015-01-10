var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('2000');
});

app.listen(80);
