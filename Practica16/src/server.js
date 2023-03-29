let express = require('express'); // Inyectamos la librería express
let app = express(); // App que hace la funcionalidad de servidor
let personsRouter = require('./routes/person'); // Inyectamos el router de personas

app.set('view engine', 'ejs'); // Indicamos que vamos a usar ejs como motor de plantillas
app.use(personsRouter); // Indicamos que vamos a usar el router de personas
app.use('/assets', express.static(__dirname + '/public')); // Indicamos que vamos a usar el directorio public como directorio de recursos estáticos

let PORT = process.env.PORT || 3000; // Puerto en el que escucha el servidor

app.listen(PORT, () => {// Escuchamos en el puerto indicado
    console.log(`Escuchando en el puerto ${PORT}`);
});