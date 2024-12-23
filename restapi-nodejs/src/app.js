var express = require("express");
var path = require("path");
var logger = require("morgan");

var router = require("./routes/index");
const appPort = process.env.APP_PORT || 3000;
var app = express();
console.log(process.env);

//enable cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(logger("dev"));
app.use(express.json({ type: ["applicaton/json"] }));
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

console.log("Evolution Serverless Container sample.");
module.exports = app;
