const express = require("express");
const app = express();
require("dotenv").config();
const cors = require('cors')
const bodyParser = require("body-parser");
const mealsRouter = require("./routes/mealsRouter");
const dinerRouter = require("./routes/dinerRouter");
const PORT = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use("/diners", dinerRouter);
app.use("/meals", mealsRouter);

app.get("/", (req, res) => {
  res.send("Pick-E-Eater Backend is running!");
});  


app.listen(PORT, "0.0.0.0", () => {
  console.log(`Pick-E-Eater listening on port ${PORT}`);
});
  