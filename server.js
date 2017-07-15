// Require our dependecies
var express = require("express");
//var bodyParser = require("body-parser");
var routes = require("./routes/express");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 3000;
var app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.use("/", routes);

// Start the server
app.listen(PORT, function() {
  console.log("Now listening on port %s! Visit localhost:%s in your browser.", PORT, PORT);
});
