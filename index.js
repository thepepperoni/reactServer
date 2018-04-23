const express = require('express');
const path = require('path');
const app = express();
const opn = require('opn');
const request = require('request');
const httpFunc = require('./http-request');

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'build')));
//*
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//*/
/*
let matchData = [];
app.get('/matchhistory', function (req, res){
    function sendData(response){
        matchData = [];
        for(let game of response.data){
            //console.log(game);
            //console.log("id obtained: " + game.relationships.rosters.data["0"].id);
            let gameDate = game.attributes.createdAt;
            let searchedId = game.relationships.rosters.data["0"].id; // returns first roster_id of the first match
            //*
            let rosterData = response.included.filter(function (data) { // searches for the roster in the data object and returns it
                return data.id === searchedId;
            });
            // the first roster corresponds to the user asked for (3/3 certainty)
            //console.log(test);
            //
            let anomObj = {};
            buildResponse(anomObj,'date',gameDate);
            buildResponse(anomObj,'won',rosterData["0"].attributes.won);
            matchData.push(anomObj);
        }
        res.send(matchData);

    }
    httpFunc.getHistory(sendData);

});
*/

function buildResponse(obj,name,values){
    Object.defineProperty(obj,name,{
        value: values,
        writable: false,
        enumerable: true
    });
}


app.listen(port,function() {
        console.log("Running at Port " + port);
        console.log("http://localhost:" + port);
        opn('http://localhost:' + port);
    }
);

