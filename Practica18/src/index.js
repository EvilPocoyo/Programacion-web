const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Configuración de dotenv
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

//Rutas
app.get('/', (req, res) => res.send('Bienvenido a mi API!'));

// Conexión a la base de datos
mongoose.connect(process.env.MONGODB)
.then(() => console.log('Conectado a la base de datos!'))
.catch((error) => console.error(error));

// Iniciamos el servidor
app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));
