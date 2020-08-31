require('dotenv').config()
const app = require('./config/app')
const connectDatabaseH = require('./database/mongodb')
const { appConfig, dbConfig } = require('./config/config')

async function initApp (appConfig,dbConfig) {
  try {
    await connectDatabaseH(dbConfig)
    app.listen(appConfig.port, () =>
      console.log(`Listen port on: ${appConfig.port}`)
    )
  } catch (e) {
    console.log(e)
    process.exit(0)
  }
}

initApp(appConfig, dbConfig)


