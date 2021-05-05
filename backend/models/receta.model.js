const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recetaSchema = new Schema({
  dniPaciente: { type: String, required: true },
  dniMedico: { type: String, required: true },
  fecha: { type: Date, default: Date.now},
  indicaciones: { type: String, required: true },
  archivo: {type: String},
  cloudinary_id: {type: String }
}, {
  timestamps: true,
});

const Receta = mongoose.model('Receta', recetaSchema);

module.exports = Receta;