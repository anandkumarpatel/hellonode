var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('8101111');
});

app.listen(80);
