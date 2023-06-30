const http = require("http");
const mongoose = require("mongoose");

const app = require("./app");
const { loadPlanetsData } = require("./models/planets.model");

// take the port that we specify in json file start or take 8000
const PORT = process.env.PORT || 8000;

// MongoDB connect
const MONGO_URL =
  "mongodb+srv://nasa-api:KwYGOUdaXMpQiPkV@cluster0.pn5ksx7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// HTTP Server
const server = http.createServer(app);

async function startServer() {
  // Connecting to MongoDB
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  });
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
