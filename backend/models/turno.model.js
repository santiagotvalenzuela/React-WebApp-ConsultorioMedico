const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const turnoSchema = new Schema({
  dniPaciente: { type: String, required: true },
  dniMedico: { type: String, required: true },
  disponible: { type: Boolean, default: true },
  especialidad: { type: String, required: true },
  fecha: { type: Date, required: true },
}, {
  timestamps: true,
});

const Turno = mongoose.model('Turno', turnoSchema);

module.exports = Turno;