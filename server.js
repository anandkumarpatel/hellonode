var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('140');
});

app.listen(80);
