const express = require('express')
const route = express.Router()

// controllers 
const { postFromPeewPeew, getFromPeewPeew } = require('../controllers/controllers.peewpeew')

/*
* method: POST
* access: PUBLIC 
* desc: sends the points to the database so hereum client can retrieve it
*/
route.post('/points_add', postFromPeewPeew)

/*
* method: GET
* access: PUBLIC 
* desc: retrieves the points from the database so hereum client can convert it to hre
*/
route.get('/points/:acc/:claim', getFromPeewPeew)




module.exports = route