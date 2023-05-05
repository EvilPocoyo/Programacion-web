const express = require('express'); // Importamos la librería de express
const mongoose = require('mongoose'); // Importamos la librería de mongoose
const personsRoutes = require('./routes/persons'); // Importamos las rutas de personas
require('dotenv').config(); // Importamos la librería de dotenv

mongoose.Promise = global.Promise; // Establecemos la promesa de mongoose
const app = express(); // Creamos una aplicación de express
const port = process.env.PORT || 3000; // Establecemos el puerto

app.set('view engine', 'ejs'); // Establecemos el motor de plantillas
app.use(express.urlencoded({ extended: false })); // Establecemos el uso de urlencoded
app.use(personsRoutes); // Establecemos el uso de las rutas de personas

mongoose.connect(process.env.MONGODB) // Conectamos a la base de datos
    .then(() => console.log('Conectando a TEST')) 
    .catch((error) => console.log(error)); 

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`)); // Escuchamos en el puerto