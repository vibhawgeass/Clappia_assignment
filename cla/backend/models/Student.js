const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  salary: {
    type: Number
  },
  address: {
    type: String
  },
  gender: {
    type: String
  },
  team: {
    type: String
  }

}, {
  collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)