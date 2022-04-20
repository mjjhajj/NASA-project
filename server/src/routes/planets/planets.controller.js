const { getAllPlanets } = require('../../models/planets.model');

function httpGetAllPlanets(req, res) {
    //returning so res is set only once
    return res.status(200).json(getAllPlanets());
}
module.exports = {
    httpGetAllPlanets,
}