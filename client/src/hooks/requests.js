const API_URL = 'http://localhost:8000';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();


}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  // Load launches, sort by flight number, and return as JSON.
  
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}
// Submit given launch data to launch system.

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // try and catch if fetch returns error
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      // called in useLaunches.js
      body: JSON.stringify(launch),
    });
  } catch (err) {
    // from useLaunches.js, submitLauch function returns response
    // if error thrown set response.ok to false
    return {
      ok: false,
    };
  }
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};