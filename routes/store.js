const express = require('express')
const { getStores } = require('../controllers/storeController')
const api = express.Router()

api.get('/stores', getStores)

module.exports = api
