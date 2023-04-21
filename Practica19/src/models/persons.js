const mongoose = require('mongoose'); // Importamos la librería de mongoose
let PersonSchema = new mongoose.Schema({ // Creamos el esquema de la base de datos
    nombre : String,
    edad : Number,
    tipoSangre : String,
    nss : String
});

module.exports = mongoose.model('Person', PersonSchema); // Exportamos el modelo