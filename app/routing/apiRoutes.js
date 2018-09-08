var path = require("path");
var friends = require('../data/friends.js');

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    var input = req.body;

    var answers = input.scores;

    var friendName = '';
    var friendPic = '';
    var totalDifference = 500;

    for (var i = 0; i < friends.length; i++) {
      var difference = 0;
      for (var q = 0; answers.length; q++) {
        difference += Math.abs(friends[i].scores[q] - answers[q]);
      }
    } if (difference < totalDifference) {
      friendName = friends[i].name;
      friendPic = friends[i].photo;
    }

    characters.push(input);

    res.json({ friendName: friendName, friendPic: friendPic });
  });

};