var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('zzz');
});

app.listen(80);
