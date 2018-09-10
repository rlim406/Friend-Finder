var friendData = require('../data/friends.js');

var path = require('path');

module.exports = function (app) {

  app.get('/api/friends', function (req, res) {

    res.json(friends);

  });


  app.post('/api/friends', function (req, res) {


    var newFriend = {

      name: "",

      image: "",

      matchDifference: 500

    };

    var userInput = req.body;

    var userScores = userInput.scores;

    var totalDifference = 0;


    for (var i = 0; i < [friendData].length; i++) {

      totalDifference = 0;


      for (var j = 0; j < [userScores].length; j++) {

        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendData[i].scores[j]));

        if (totalDifference <= newFriend.friendDifference) {


          newFriend.name = friendData[i].name;

          newFriend.photo = friendData[i].photo;

        }

      }

    }



    friendData.push(userInput);



    res.json(newFriend);

  });

}; 