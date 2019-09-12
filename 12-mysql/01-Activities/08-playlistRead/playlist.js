var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Camera13!",
  database: "playlist"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

function createProduct() {
  console.log("Inserting a new song...\n");
  var query = connection.query(
    "INSERT INTO songs SET ?",
    {
      title: "Sobe",
      artist: "Childish Gambino",
      genre: "Hip-hop"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " song inserted!\n");
      // Call updateProduct AFTER the INSERT completes
      updateProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function updateProduct() {
  console.log("Updating all songs quantities...\n");
  var query = connection.query(
    "UPDATE songs SET ? WHERE ?",
    [
      {
        artist: "Danny Brown"
      },
      {
        title: "Detroit City"
      }
    ],
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " songs updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}

function deleteProduct() {
  console.log("Deleting all Danny Brown...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      artist: "Childish Gambino"
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " products deleted!\n");
      // Call readProducts AFTER the DELETE completes
      readProducts();
    }
  );
}

function readProducts() {
  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM songs", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].id +
          ") " +
          res[i].title +
          " | " +
          res[i].artist +
          " | " +
          res[i].genre
      );
    }
    connection.end();
  });
}
