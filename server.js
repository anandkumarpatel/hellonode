var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('508');
});

app.listen(80);
