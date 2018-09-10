var friendInfo = require('../data/friends.js');

var path = require('path');

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  //post

  app.post('/api/friends', function (req, res) {

    var newFriend = {

      name: "",
      image: "",
      difference: 500

    };

    var userInput = req.body;
    var userScores = userInput.scores;
    var scoresDiff = 0;

    for (var i = 0; i < friendInfo.length; i++) {

      scoresDiff = 0;

      for (var j = 0; j < userScores.length; j++) {

        scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(userScores[j])));

      } if (scoresDiff <= newFriend.difference) {

        newFriend.name = friends[i].name;
        newFriend.photo = friends[i].photo;
        newfriend.difference = scoresDiff;
      }


    }

    friendInfo.push(userInput);
    res.json(newFriend);

  });

};