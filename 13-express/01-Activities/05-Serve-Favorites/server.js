// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  // Capture the url the request is made to
  var path = req.url;
  console.log(path);
  // Depending on the URL, display a different HTML file.
  switch (path) {
    case "/frameworks":
    case "/foods":
    case "/movies":
      return readFile(path + ".html", res);
    case "/":
      return readFile("/index.html", res);
    default:
      fs.readFile(__dirname + "/404.html", function(err, data) {
        if (err) throw err;
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(data);
      });
  }
}
function readFile(pat, res) {
  fs.readFile(__dirname + pat, function(err, data) {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

server.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORT);
});
