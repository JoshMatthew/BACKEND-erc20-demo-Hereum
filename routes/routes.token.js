const express = require('express')
const route = express.Router()
const cors = require('cors')


// Used to allow cors for specific sites
const whitelist = ['https://hereum.herokuapp.com/', 'https://joshmatthew.github.io/PeewPeew/']

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// controllers 
const { getHereumContract } = require('../controllers/controllers.token')

/*
* method: GET
* access: PUBLIC 
* desc: sends the smart contract to the client
*/
route.get('/contract', cors(corsOptions), getHereumContract)

module.exports = route