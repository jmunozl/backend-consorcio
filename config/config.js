const config = {
  appConfig: {
    port: process.env.APP_PORT || process.env.PORT
  },
  dbConfig: {
    port: process.env.DB_PORT || process.env.PORT,
    host: process.env.DB_HOST || process.env.MONGODB_URI,
    dbName: process.env.DB_NAME
  },
  dbConfigH: {
    url: process.env.MONGODB_URI || 'mongodb://localhost:27017/drugstores'
  }
}

module.exports = config
