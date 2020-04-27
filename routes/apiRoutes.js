const Workout = require("../models/workout.js");

module.exports = function (app) {
  app.get("/api/workout", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

}; //end of export