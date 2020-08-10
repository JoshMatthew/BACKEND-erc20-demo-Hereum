require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

// Initialize app
const app = express()



// Connect to mongodb
mongoose.connect("mongodb+srv://vim:vim_vim@hereum.fmt74.mongodb.net/points?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch(err => {
    console.error.bind(console, 'connection error:')
  })


// Middlewares
app.use(express.json())
app.use(cors())
app.options('*', cors())
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", '*');
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
//   next();
// });


// Routes
app.use('/token', require('./routes/routes.token')) // index route
app.use('/peewpeew', require('./routes/routes.peewpeew')) // index route


// PORT
const port = process.env.PORT || 8080

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:8080`))