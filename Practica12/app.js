var express = require ('express'); // Importamos la dependencia
var app = express(); // Declaramos una app de Express

var port = process.env.PORT || 3000; //Elegimos el puerto en donde queremos que escuche el servidor

app.set('view engine', 'ejs')

// La primera ruta ser la ruta raiz
app.get('/', function ( req, res){
    res.render('index');
});

// La segunda ruta/api, regresa un objeto JSON
app.get('/api', function (req, res){
    res.json({firstName : 'Jesus',lastName : 'Alcocer'})
})

// La tercera ruta /person/:id, regresa un objeto que contiene 1
// solo par de key:value, en este caso la key se llama ID y su value es el que
// recibimos en la colección parms:
app.get('/person/:id', function(req, res){
    res.render('person', {ID: req.params.id});
})

app.listen(port) // Iniciamos el servidor