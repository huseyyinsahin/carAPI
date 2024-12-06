"use strict";

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

require("./src/config/dbConnection")();

app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome Car Store",
  });
});

require("express-async-errors");

app.use("/car", require("./src/routes/car"));

app.listen(process.env.PORT, () =>
  console.log("Running: http://127.0.0.1:" + process.env.PORT)
);
