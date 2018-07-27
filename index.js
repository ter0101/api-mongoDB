const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongoose");

//set up express app
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

//connect to mongodb
mongodb.connect("mongodb://localhost/ninjago");
mongodb.Promise = global.Promise;

//initialize routes
const router = require("./routes/api.js");
app.use("/api", router);

//error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({
    error: err.message
  });
});

//listen for requests
app.listen(process.env.port || 4000, function () {
  console.log("now listening for requests");
});