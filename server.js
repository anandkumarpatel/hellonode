var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('2031/12/12/23');
});

app.listen(80);
