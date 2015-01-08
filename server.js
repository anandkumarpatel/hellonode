var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('119');
});

app.listen(80);
