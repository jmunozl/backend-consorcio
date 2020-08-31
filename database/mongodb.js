const mongoose = require('mongoose')
const { getStores } = require('../helpers')
const Store = require('../models/Store')

mongoose.connection.on('open', async () => {
    await console.log('Database connected')
    if (await Store.countDocuments().exec() > 0) return console.log('Store Collection exist')

    try {
      const stores = await getStores()
      for (const store of stores) {
        const _store = new Store(store)
        await _store.save()
      }
      console.log('Store Collection created')
    } catch (err) {
      console.error(err)
    }

  }
)

async function connectDatabase ({ host, port, dbName }) {
  const uri = `mongodb://${host}:${port}/${dbName}`
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })

}

async function connectDatabaseH ({ url }) {
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

}

module.exports = connectDatabaseH
