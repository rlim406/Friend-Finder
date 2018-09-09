var friends = require('../data/friends.js');

var path = require('path');

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //post

  app.post('/api/friends', function (req, res) {

    var userInput = req.body.scores;

    var answersArray = [];

    for (var i = 0; i < friends.length; i++) {

      var scoresDiff = 0;

      for (var j = 0; j < userInput.length; j++) {

        scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userInput[j])));

      }

      answersArray.push(scoresDiff);

    }

    for (var i = 0; i < answersArray.length; i++) {

      if (answersArray[i] <= answersArray[bestMatch]) {

        bestMatch = i;

      }

    }

    var newFriend = friends[bestMatch];

    res.json(newFriend);

    friends.push(req.body);

  });

};