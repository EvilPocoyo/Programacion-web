let express = require('express'); // Importamos express
let router = express.Router(); // Creamos un router


router.get('/person', (req, res) => { // Ruta para obtener una persona
    res.send('Has solicitado el listado de personas'); // Enviamos un mensaje
});

module.exports = router; // Exportamos el router