const Store = require('../models/Store')

async function getStores (req, res) {
  const { comuna_nombre, local_nombre } = req.query
  if (comuna_nombre === undefined || comuna_nombre=== ''){
    const stores = await Store.find({
      local_nombre: local_nombre.toUpperCase()
    }, {
      local_nombre: 1,
      local_direccion: 1,
      local_telefono: 1,
      local_lat: 1,
      local_lng: 1,
      _id: 0
    }).lean().exec()
    res.status(200).send({ stores })
  }else if(local_nombre=== undefined || local_nombre=== ''){
    const stores = await Store.find({
      comuna_nombre: comuna_nombre.toUpperCase()

    }, {
      local_nombre: 1,
      local_direccion: 1,
      local_telefono: 1,
      local_lat: 1,
      local_lng: 1,
      _id: 1
    }).lean().exec()
    res.status(200).send({ stores })

  }else {
    const stores = await Store.find({
      local_nombre: local_nombre.toUpperCase(),
      comuna_nombre: comuna_nombre.toUpperCase()

    }, {
      local_nombre: 1,
      local_direccion: 1,
      local_telefono: 1,
      local_lat: 1,
      local_lng: 1,
      _id: 0
    }).lean().exec()
    res.status(200).send({ stores })
  }

}

module.exports = { getStores }