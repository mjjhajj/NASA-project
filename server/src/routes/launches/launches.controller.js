const { 
    getAllLaunches,
    addNewLaunch,
  } = require('../../models/launches.model');
// it return status and response launches object from which
// we only need values and convert it into array which will
// res.json() returns
function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunches());
  }
  
function httpAddNewLaunch(req, res) {
    // express.json() return parsed data in req.body
    const launch = req.body;
    if (!launch.mission || !launch.rocket || !launch.launchDate
        || !launch.target) {
          return res.status(400).json({
            error: 'Missing required launch property',
          });
        }
    //convert what ever format of date we get from res
    //into date format using new Date()
    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
      return res.status(400).json({
        error: 'Invalid launch date',
      });
    }
  
    addNewLaunch(launch);
  return res.status(201).json(launch); 
}


module.exports = {
    httpGetAllLaunches,
    httpAddNewLaunch,
}