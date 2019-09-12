var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Camera13!",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
});

inquirer
  .prompt([
    {
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: ["Search by Artist", "Search by Song Name", "Search by Year"]
    }
  ])
  .then(function(inquirerResponse) {
    let search = inquirerResponse.action;
    if (search === "Search by Artist") {
      inquirer
        .prompt([
          {
            name: "query",
            type: "input",
            message: "What is the name of the artist you are looking for?"
          }
        ])
        .then(function runSearch(response) {
          connection.query(
            "SELECT * FROM top5000 WHERE ?",
            { artist: response.query },
            function(err, res) {
              if (err) throw err;
              console.log(res);
              connection.end();
            }
          );
        });
    } else if (search === "Search by Song Name") {
      inquirer
        .prompt([
          {
            name: "query",
            type: "input",
            message: "What is the name of the song you are looking for?"
          }
        ])
        .then(function runSearch(response) {
          connection.query(
            "SELECT * FROM top5000 WHERE ?",
            { song: response.query },
            function(err, res) {
              if (err) throw err;
              console.log(res);
              connection.end();
            }
          );
        });
    } else if (search === "Search by Year") {
      inquirer
        .prompt([
          {
            name: "query",
            type: "input",
            message: "What year would you like to search by?"
          }
        ])
        .then(function runSearch(response) {
          connection.query(
            "SELECT * FROM top5000 WHERE ?",
            { year: response.query },
            function(err, res) {
              if (err) throw err;
              console.log(res);
              connection.end();
            }
          );
        });
    }
  });
