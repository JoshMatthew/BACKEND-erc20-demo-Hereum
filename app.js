require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

// Initialize app
const app = express()



// Connect to mongodb
mongoose.connect("mongodb+srv://vim:vim_vim@hereum.fmt74.mongodb.net/points?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MongoDB connected')
});


// Middlewares
app.use(express.json())

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


// Routes
app.use('/token', cors(corsOptions), require('./routes/routes.token')) // index route
app.use('/peewpeew', cors(corsOptions), require('./routes/routes.peewpeew')) // index route


// PORT
const port = process.env.PORT || 8080

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:8080`))