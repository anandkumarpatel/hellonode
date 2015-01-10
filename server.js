var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('1119');
});

app.listen(80);
