var express = require ('express'); // Importamos la dependencia
var app = express(); // Declaramos una app de Express
var port = process.env.PORT || 3000; //Elegimos el puerto en donde queremos que escuche el servidor
app.use('/assets', express.static(__dirname + '/public')); // Declaramos la ruta de los archivos estaticos

app.set('view engine', 'ejs') // Declaramos el motor de plantillas

// La primera ruta es la ruta raiz
app.get('/', function ( req, res){
    // Aqui se manda el archivo html
    res.send(`<!DOCTYPE html> <html lang="en"> <head>  <link rel="stylesheet" href="/assets/style.css"> 
    <title>Practica 14</title> </head> 
    <body> <h1>HOLA MUNDO</h1> 
    <p>Este es un parrafo y su contenido debe ser azul</p>
    </body> </html>`);
});

// La tercera ruta /person/:id, regresa un json con el id y el query string
app.get('/person/:id', function(req, res){
    // Renderizamos la vista person.ejs
    res.render('person', {ID: req.params.id, Qstr: req.query.qstr}); 
});

app.get('/persona/:id', function(req, res){
    res.render('persona', {ID: req.params.id, Message: req.query.message, times: req.query.times});
})

app.listen(port) // Iniciamos el servidor