const express = require('express'); // Importamos express
let router = express.Router(); // Creamos un objeto Router

router.get('/student', (req, res) => {
    let t = req.params.id; // Obtenemos el parámetro id
    res.render('student'); 
});

router.post('/addStudent', function (req, res) {
    res.render('displayData', { // Pasamos los datos a la vista displayData
        nombre: req.body.nombre,
        nss: req.body.nss,
        edad: req.body.edad,
        tipoSangre: req.body.tipoSangre
    });
});

router.post('/personJson', express.json({ type: '*/*' }), (req, res) => {
    console.log(`nombre: ${req.body.nombre}, apellido: ${req.body.apellido}`); // Imprimimos los datos en consola
});

router.get('/testJson', function (req, res) { // Ruta para la vista testJson
    res.render('testJson');
});

module.exports = router; // Exportamos el router