var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('a993');
});

app.listen(80);
