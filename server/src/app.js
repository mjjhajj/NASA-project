// contains all of our express middleware
const path = require('path');
const express = require('express');
// new packages from npm
const cors = require('cors')
const morgan = require('morgan'); 
// routes
const planetsRouter = require('./routes/planets/planets.router')
const launchesRouter = require('./routes/launches/launches.router')
const app = express();
// chain of middlewares

// to set CORS to allow request from
// clietn frontend port 3000
app.use(cors({
    origin: 'http://localhost:3000'
}));
//logging request with morgan
app.use(morgan('combined'));
//return the parse json in req.body{}
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')))
app.use('/planets', planetsRouter);
//adding default routes /launches
app.use('/launches', launchesRouter);
// here /* which express uses to match any endpoint which
// which do not matches above, it then pass it to front end index.html
// so our front end can handle the request.
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
  });

module.exports = app;