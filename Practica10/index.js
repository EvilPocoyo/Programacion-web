var express = require ('express'); // Importamos la dependencia
var app = express(); // Declaramos una app de Express

var port = process.env.PORT || 3000; //Elegimos el puerto en donde queremos que escuche el servidor

// La primera ruta ser la ruta raiz
app.get ('/', function ( req, res){
    res.send(`<html><head></head><body><h1>Hello World</h1></body></html>`);
});

// La segunda ruta/api, regresa un objeto JSON
app.get('/api', function (req, res){
    res.json({firstName : 'Jesus',lastName : 'Alcocer'})
})

app.get('/person/:id', function(req, res){
    res.send(`<html><head></head><body><h1>Person : ${req.params.id} </h1></body></html>`)
})

app.listen(port) // Iniciamos el servidor