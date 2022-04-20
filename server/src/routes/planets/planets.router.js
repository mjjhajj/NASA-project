// this file just groups together related routes
// is type of another middleware

const express = require('express');
const {
    httpGetAllPlanets,
  } = require('./planets.controller');
  const planetsRouter = express.Router();


  planetsRouter.get('/', httpGetAllPlanets);

  module.exports = planetsRouter;
