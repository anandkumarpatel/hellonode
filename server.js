var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('a12');
});

app.listen(80);
