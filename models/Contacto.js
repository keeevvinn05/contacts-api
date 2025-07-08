const mongoose = require('mongoose');

// Definir el esquema
const esquemaContacto = new mongoose.Schema({
  nombre: { type: String, required: true },    // corregido "require" → "required"
  correo: { type: String, required: true },     // falta coma al final
  telefono: { type: String },            // coma no necesaria al final del último campo
  empresa: {type: String }
});


// Exportamos el modelo con nombre 'Contacto'
module.exports = mongoose.model('Contacto', esquemaContacto);
