const express = require('express');
const path = require('path');
const app = express();
const opn = require('opn');

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