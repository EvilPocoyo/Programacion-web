var express = require ('express'); // Importamos la dependencia
var app = express(); // Declaramos una app de Express
var port = process.env.PORT || 3000; //Elegimos el puerto en donde queremos que escuche el servidor

app.use(express.urlencoded({extended: false})); // Declaramos el middleware para el manejo de formularios
app.set('view engine', 'ejs') // Declaramos el motor de plantillas

// Aqui estamos declarando la ruta de la pagina principal
app.get('/student', function(req, res){
    res.render('student', {});
});

// Aqui se reciben los datos del formulario y se muestran en el navegador
/*app.post('/addStudent', function(req, res){
    res.send(`  Nombre: ${req.body.nombre} 
                Edad: ${req.body.edad}
                NSS: ${req.body.nss}
                Tipo de sangre: ${req.body.tipoSangre}`);
});*/

// Aqui se reciben los datos del formulario para despues enviarlos a la plantilla de EJS
app.post('/addStudent', function(req, res){
    res.render('displayData', {
        nss: req.body.nss,
        nombre: req.body.nombre,  
        edad: req.body.edad, 
        tipoSangre: req.body.tipoSangre});
});

app.listen(port) // Iniciamos el servidor