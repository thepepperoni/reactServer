const express = require('express');
const path = require('path');
const app = express();
const opn = require('opn');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3000,function() {
        console.log("Running at Port 3000");
        opn('http://localhost:3000');
    }
);