var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('asdgasdghash');
});

app.listen(80);
