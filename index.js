var express = require('express');
var path = require('path');
var app = express();
let opn = require('opn');
//const httpFunc = require('./http-request');

var port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});



app.listen(port,function() {
        console.log("Running at Port " + port);
        console.log("http://localhost:" + port);
        //opn('http://localhost:' + port);
    }
);

