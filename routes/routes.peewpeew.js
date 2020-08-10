const express = require('express')
const route = express.Router()
const cors = require('cors')


// Used to allow cors for specific sites
const whitelist = ['https://hereum.herokuapp.com/', 'https://joshmatthew.github.io/PeewPeew/']

const corsOptionsDelegate = function (req, callback) {
  let corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

// controllers 
const { postFromPeewPeew, getFromPeewPeew } = require('../controllers/controllers.peewpeew')

/*
* method: POST
* access: PUBLIC 
* desc: sends the points to the database so hereum client can retrieve it
*/
route.post('/points', cors(corsOptionsDelegate), postFromPeewPeew)

/*
* method: GET
* access: PUBLIC 
* desc: retrieves the points from the database so hereum client can convert it to hre
*/
route.get('/points/:acc/:claim', cors(corsOptionsDelegate), getFromPeewPeew)




module.exports = route