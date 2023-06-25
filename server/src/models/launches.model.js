const launches = new Map();

let latestFlightNumber = 100;

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

function getAllLaunches() {
  return Array.from(launches.values());
}

function addNewLaunch(launch) {
  latestFlightNumber++;
  launches.set(
    launch.flightNumber,
    Object.assign(launch, {
      success: true,
      upcoming: true,
      customers: ["Zero to Mestry", "NASA"],
      flightNumber: latestFlightNumber,
    })
  );
}

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
