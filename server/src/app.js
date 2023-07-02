const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
// express code
const express = require("express");
const app = express();

const api = require("./routes/api");

// use middleware to parse any incoming JSON from Requests
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(morgan("combined"));

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/v1", api);

app.use("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

module.exports = app;
