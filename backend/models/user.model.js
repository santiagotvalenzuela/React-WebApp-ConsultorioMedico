const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  dni: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: { type: String },
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  rol: { type: Number, required: true }, //1 admin, 2 secretaria, 3 medico y 4 paciente
  mail: { type: String, required: true },
  telefono: { type: Number, required: true },
  fecNac: { type: Date, required: true },
  obraSocial: { type: String, required: true },
  carnet: { type: Number, required: true },
  estado: { type: Boolean, default: true }
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;