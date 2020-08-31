const { Schema, model } = require('mongoose')

const  storeSchema = new Schema({
  fecha: { type: String },
  local_id: { type: String },
  local_nombre: { type: String,trim: true },
  comuna_nombre: { type: String,trim: true },
  localidad_nombre: { type: String },
  local_direccion: { type: String },
  funcionamiento_hora_apertura: { type: String },
  funcionamiento_hora_cierre: { type: String },
  local_telefono: { type: String },
  local_lat: { type: String },
  local_lng: { type: String },
  funcionamiento_dia: { type: String },
  fk_region: { type: String },
  fk_comuna: { type: String }
})

module.exports = model('Store', storeSchema)
