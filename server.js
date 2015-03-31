var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('a90');
});

app.listen(80);
