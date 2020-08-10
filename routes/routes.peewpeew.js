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
const { postFromPeewPeew, getFromPeewPeew } = require('../controllers/controllers.peewpeew')

/*
* method: POST
* access: PUBLIC 
* desc: sends the points to the database so hereum client can retrieve it
*/
route.post('/points', cors(corsOptions), postFromPeewPeew)

/*
* method: GET
* access: PUBLIC 
* desc: retrieves the points from the database so hereum client can convert it to hre
*/
route.get('/points/:acc/:claim', cors(corsOptions), getFromPeewPeew)




module.exports = route