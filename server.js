const express = require("express")
const bodyParser = require("body-parser");

const app = express()
const indexRouter = require("./routes/index");

app.get("/", (req, res) => res.send("Hello Express!"))

const port=process.env.port||1766;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/film", indexRouter);


app.listen(port, () => console.log(`Server is listening on localhost:${port}`))