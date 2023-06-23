const http = require("http");
const app = require("./app");

// take the port that we specify in json file start or take 8000
const PORT = process.env.PORT || 8000;

// HTTP Server
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
