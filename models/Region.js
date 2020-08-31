const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegionSchema = Schema({
  id: Number,
  name: String
})

module.exports = mongoose.model('Regions', RegionSchema)
