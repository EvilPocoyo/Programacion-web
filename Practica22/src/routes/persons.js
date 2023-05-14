const express = require('express'); // Importamos la librería de express
const router = express.Router(); // Creamos un router de express
const mongoose = require('mongoose'); // Importamos la librería de mongoose
let Person = require('../models/persons'); // Importamos el modelo de persona

router.get('/gente', async (req, res) => { // Creamos una ruta para obtener a la gente
    const Persons = await Person.find({}); // Buscamos todas las personas
    res.render('person', { Persons }); // Regresamos las personas
});

router.get('/addPerson', (req, res) => { // Creamos una ruta para agregar a una persona
    res.render('addPerson');
});

router.get('/findById/:id', (req, res) => { // Creamos una ruta para actualizar a una persona
    Person.findById(req.params.id)
        .then((myPerson) => { res.render('personUpdate', { myPerson }) }) // Regresamos la persona
        .catch((error) => { res.json({ message: error }) }); // Regresamos el error 
});

router.get('/deletePerson/:id', async (req, res) => { // Creamos una ruta para eliminar a una persona
    try {
        const deletedPerson = await Person.findByIdAndDelete(req.params.id);
        res.redirect('/gente');
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/addPerson', (req, res) => { // Creamos una ruta para agregar a una persona
    const newPerson = Person({
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    });

    newPerson
        .save()// Guardamos la persona
        .then((data) => { res.redirect('/gente') }) // Redireccionamos a la ruta de obtener a la gente
        .catch((error) => { res.json({ message: error }) }); // Regresamos el error
});

router.post('/updatePerson', (req, res) => { // Creamos una ruta para actualizar a una persona
    Person.findByIdAndUpdate(req.body.objId, {// Buscamos la persona por su id y la actualizamos
        nombre: req.body.nombre,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre,
        nss: req.body.nss
    })
        .then((data) => { res.redirect('/gente') }) // Redireccionamos a la ruta de obtener a la gente
        .catch((error) => { res.json({ message: error }) }); // Regresamos el error
});

module.exports = router; // Exportamos el router