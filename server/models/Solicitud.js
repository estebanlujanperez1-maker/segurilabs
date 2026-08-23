const mongoose = require('mongoose');

const solicitudSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String },
  empresa: { type: String },
  telefono: { type: String, required: true },
  correo: { type: String },
  tipoAsesoria: { type: String },
  mensaje: { type: String },
  fecha: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Solicitud', solicitudSchema);