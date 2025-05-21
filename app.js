const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors')
const bodyParser = require("body-parser");
const mealsRouter = require("./routes/mealsRouter");
const peopleRouter = require("./routes/peopleRouter");
const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use("/people", peopleRouter);
app.use("/meals", mealsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  console.log(`Pick-E-Eater listening on port ${port}`);
});
