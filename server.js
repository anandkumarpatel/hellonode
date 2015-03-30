var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('cc');
});

app.listen(80);
