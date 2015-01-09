var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('308');
});

app.listen(80);
