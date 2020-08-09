const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountPoints = new Schema({
  account_id: {
    type: String,
    required: true
  },
  points: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('AccountPoints', AccountPoints, 'account_points');