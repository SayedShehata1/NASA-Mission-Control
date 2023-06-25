const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
// express code
const express = require("express");
const app = express();

const planetsRouter = require("./routes/palnets/planets.router");
const launchesRouter = require("./routes/launches/launches.router");

// use middleware to parse any incoming JSON from Requests
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(planetsRouter);
app.use(launchesRouter);

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
