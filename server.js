var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('81011111');
});

app.listen(80);
