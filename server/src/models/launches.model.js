const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "kepler Edxploration X",
  rocket: "Explor IS1",
  lauchDate: new Date("December 27 , 2030"),
  destination: "kepler-442 b",
  customer: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

module.exports = {
  launches,
};
