const axios = require('axios')
const baseUrl = process.env.URL_LOCAL

async function getStores () {
  return (await axios.get(`${baseUrl}`)).data
}

module.exports = { getStores }