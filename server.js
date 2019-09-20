require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const { PORT, secret } = require("./config/envVariables");
const indexRouter = require("./routes/index");

const Port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.get("/env", (req, res) => res.send(JSON.stringify(process.env.SECRET)));
// app.use("/", (req, res) => res.send("Hello Express!"));
app.get("/", (req, res) => {
  res.redirect("/film");
});
app.use("/film", indexRouter);

app.listen(Port, () => console.log(`Server is listening on localhost:${Port}`));
