var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('a6');
});

app.listen(80);
