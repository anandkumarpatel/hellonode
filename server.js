var express = require('express');
var app = express();

app.use(function(req, res){
  res.send();
});

app.listen(80);
