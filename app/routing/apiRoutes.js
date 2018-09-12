var friendData = require('../data/friends.js');

var path = require('path');



module.exports = function (app) {

  app.get('/api/friends', function (req, res) {

    res.json(friends);

  });


  app.post('/api/friends', function (req, res) {

    // Capture the user input object

    var userInput = req.body;

    console.log('userInput = ' + JSON.stringify(userInput));



    var userScore = userInput.scores;

    console.log('userResponses = ' + userScore);


    var matchName = '';

    var matchImage = '';

    var totalDifference = 50;



    for (var i = 0; i < friendData.length; i++) {


      var diff = 0;

      for (var j = 0; j < userScore.length; j++) {

        diff += Math.abs(parseInt(friendData[i].scores[j]) - parseInt(userScore[j]));

      }

      // console.log('diff = ' + diff);

      if (diff < totalDifference) {

        var minimum = Math.min(diff);

        console.log('Closest match found = ' + minimum);

        console.log('Friend name = ' + friendData[i].name);

        console.log('Friend image = ' + friendData[i].photo);


        totalDifference = minimum;

        matchName = friendData[i].name;

        matchImage = friendData[i].photo;

      }

    }


    friendData.push(userInput);


    res.json({ matchName: matchName, matchImage: matchImage });

  });

}; 