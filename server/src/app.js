const cors = require("cors");
// express code
const express = require("express");
const app = express();

const planetsRouter = require("./routes/palnets/planets.router");

// use middleware to parse any incoming JSON from Requests
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.use(planetsRouter);

module.exports = app;
