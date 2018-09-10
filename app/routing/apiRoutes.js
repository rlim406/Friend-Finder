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



    // Compute best friend match

    var matchName = '';

    var matchImage = '';

    var totalDifference = 500; // Make the initial value big for comparison



    // Examine all existing friends in the list

    for (var i = 0; i < friendData.length; i++) {

      // console.log('friend = ' + JSON.stringify(friends[i]));



      // Compute differenes for each question

      var diff = 0;

      for (var j = 0; j < userScore.length; j++) {

        diff += Math.abs(friendData[i].scores[j] - userScore[j]);

      }

      console.log('diff = ' + diff);



      // If lowest difference, record the friend match

      if (diff < totalDifference) {

        console.log('Closest match found = ' + diff);

        console.log('Friend name = ' + friendData[i].name);

        console.log('Friend image = ' + friendData[i].photo);



        totalDifference = diff;

        matchName = friendData[i].name;

        matchImage = friendData[i].photo;

      }

    }



    // Add new user

    friends.push(userInput);



    // Send appropriate response

    res.json({ matchName: matchName, matchImage: matchImage });

  });

}; 