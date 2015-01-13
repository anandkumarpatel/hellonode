var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('2005');
});

app.listen(80);
