// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;
// Data
// ===========================================================
var yoda = {
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
};

var darthmaul = {
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
};

var obiWanKenobi = {
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 42,
  forcePoints: 9000
};
// Routes
// ===========================================================
app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
  res.json(yoda);
});

app.get("/darthmaul", function(req, res) {
  res.json(darthmaul);
});
app.get("/obiwankenobi", function(req, res) {
  res.json(obiWanKenobi);
});
// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
