var inquirer = require("inquirer");
var mysql = require("mysql");

function postORbid() {
  inquirer
    .prompt([
      {
        type: "list",
        choices: ["POST", "BID", "EXIT"],
        name: "userChoice"
      }
    ])
    .then(function(res) {
      if (res.userChoice === "POST") {
        promptSell();
      } else if (res.userChoice === "BID") {
      } else if (res.userChoice === "EXIT") {
      }
    });
}

var count = 0;

function promptSell() {
  if (count < 3) {
    inquirer
      .prompt([
        {
          name: "item",
          message: "What are you selling?"
        },
        {
          name: "quantity",
          message: "How many of this item are you selling?"
        },
        {
          name: "category",
          message:
            "In which category would you like to post this item in? [Enter any category.]"
        }
      ])
      .then(function(listing) {
        createListing(listing.item, listing.quantity, listing.category);
        var newListing = new PostListing(
          listing.item,
          listing.quantity,
          listing.category
        );
        newListing.printInfo();
        count++;
        if (count === 3) {
          count = 0;
        }
      });
  }
}
function createListing(itemName, quantityAmount, categoryName) {
  var query = connection.query(
    "INSERT INTO listings SET ?",
    {
      item: itemName,
      quantity: quantityAmount,
      category: categoryName,
      highestBid: 0,
      currentBid: 0
    },
    function(err, res) {
      if (err) throw err;
      console.log(res.affectedRows + " listing inserted!\n");
    }
  );
}
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Camera13!",
  database: "greatbay_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
});
postORbid();
