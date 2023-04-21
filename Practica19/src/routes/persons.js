const express = require('express'); // Importamos la librería de express
const router = express.Router(); // Creamos un router de express
const mongoose = require('mongoose'); // Importamos la librería de mongoose
let Person = require('../models/persons'); // Importamos el modelo de persona

router.get('/gente', async (req, res) => { // Creamos una ruta para obtener a la gente
    const Persons = await Person.find({}); // Buscamos todas las personas
    res.json(Persons); // Regresamos las personas
});

module.exports = router; // Exportamos el router