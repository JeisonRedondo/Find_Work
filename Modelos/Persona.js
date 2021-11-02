const mongoose = require('mongoose');

let PersonaSchema = new mongoose.Schema({
    idPersona :Number,
    documentoPersona :String,
    nombrePersona :String,
    apellidoPersona :String,
    direccionPersona :String,
    emailPersona :String,
    t_fijoPersona :String,
    t_celPersona :String,
    urlPersona :String,
    perfilPersona :String
})

module.exports = mongoose.model('persona',PersonaSchema,'Personas');