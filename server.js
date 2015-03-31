var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('eee');
});

app.listen(80);
