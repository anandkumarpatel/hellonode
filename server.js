var express = require('express');
var app = express();

app.use(function(req, res){
    res.send('OK');
});

app.listen(80);
