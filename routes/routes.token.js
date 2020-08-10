const express = require('express')
const route = express.Router()


// controllers 
const { getHereumContract } = require('../controllers/controllers.token')

/*
* method: GET
* access: PUBLIC 
* desc: sends the smart contract to the client
*/
route.get('/contract', getHereumContract)

module.exports = route