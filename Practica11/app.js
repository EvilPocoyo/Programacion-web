var express = require ('express'); // Importamos la dependencia
var app = express(); // Declaramos una app de Express

var port = process.env.PORT || 3000; //Elegimos el puerto en donde queremos que escuche el servidor

app.use('/assets', express.static(__dirname + '/public'));

// Otro uso que podemos darle a “app.use()” es para “debuguear” lo que sucede
//cuando se accede a una ruta en particular
app.use('/', function (req, res, next){
    console.log('Request Url:' + req.url);
    next();
});

// La primera ruta ser la ruta raiz
app.get('/', function ( req, res){
    cad=`<!DOCTYPE html> <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/assets/style.css" type="text/css" rel="stylesheet">
        <title>Document</title>
    </head>
    <body>
        Hola Mundo
    </body>
    </html>`;

    res.send(cad)
});

// La segunda ruta/api, regresa un objeto JSON
app.get('/api', function (req, res){
    res.json({firstName : 'Jesus',lastName : 'Alcocer'})
})

app.get('/person/:id', function(req, res){
    res.send(`<html><head></head><body><h1>Person : ${req.params.id} </h1></body></html>`)
})

app.listen(port) // Iniciamos el servidor