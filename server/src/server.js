const http = require("http");

const app = require("./app");

const { mongoConnect } = require("./services/mongo");

const { loadPlanetsData } = require("./models/planets.model");

const { loadLaunchData } = require("./models/launches.model");

// take the port that we specify in json file start or take 8000
const PORT = process.env.PORT || 8000;

// HTTP Server
const server = http.createServer(app);

async function startServer() {
  // Connecting to MongoDB
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
