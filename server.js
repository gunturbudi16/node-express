require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const indexRouter = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/env", (req, res) => res.send(JSON.stringify(process.env.SECRET)));
// app.use("/", (req, res) => res.send("Hello Express!"));
app.get("/", (req, res) => {
  res.send("Hallo Express");
});
app.use("/film", indexRouter);

module.exports = app;
