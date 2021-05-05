const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate')

const Schema = mongoose.Schema;

const historialSchema = new Schema({
  dniPaciente: { type: String, required: true },
  obraSocial: { type: String, required: true },
  carnet: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now},
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  dniMedico: { type: String },
  fecha: { type: Date },
  motivo: { type: String },
  diagnostico: {type: String }
}, {
  timestamps: true,
});
   
const Historial = mongoose.model('Historial', historialSchema);

module.exports = Historial;