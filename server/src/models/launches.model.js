const launches = new Map();

let latestFlightNumber = 100;
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
}
// here we map flightnumber to launch object
// so we cam get the whole obj from flightno
//to launch new mission
launches.set(launch.flightNumber, launch);

function addNewLaunch(launch) {
    latestFlightNumber++;
    launches.set(
      latestFlightNumber,
      Object.assign(launch, {
        success: true,
        upcoming: true,
        customers: ['Zero to Mastery', 'NASA'],
        flightNumber: latestFlightNumber,
      })
    );
  }

  function getAllLaunches() {
    // only need values from map
    return Array.from(launches.values());
  }
  module.exports = {
    getAllLaunches,
    addNewLaunch,
  };