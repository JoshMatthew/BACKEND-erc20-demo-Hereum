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
const { getHereumContract } = require('../controllers/controllers.token')

/*
* method: GET
* access: PUBLIC 
* desc: sends the smart contract to the client
*/
route.get('/contract', cors(corsOptionsDelegate), getHereumContract)

module.exports = route