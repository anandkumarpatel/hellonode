var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('808');
});

app.listen(80);
