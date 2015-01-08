var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('146');
});

app.listen(80);
