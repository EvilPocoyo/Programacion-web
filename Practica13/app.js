var express = require ('express'); // Importamos la dependencia
var app = express(); // Declaramos una app de Express

var port = process.env.PORT || 3000; //Elegimos el puerto en donde queremos que escuche el servidor

app.use('/assets', express.static(__dirname + '/public')); // Declaramos la ruta de los archivos estaticos

app.set('view engine', 'ejs') // Declaramos el motor de plantillas

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

// La cuarta ruta /personas, regresa un objeto que contiene un arreglo de objetos
let data = [
    {id : 1, nombre: 'Hugo', apellidos : 'Estrada Ramirez', edad : 19},
    {id : 2, nombre: 'Estela', apellidos : 'Perez Suarez', edad : 18},
    {id : 3, nombre: 'Sabrina', apellidos : 'Contreras Morales', edad : 17}    
];

// La ruta /personas, regresa un objeto que contiene un arreglo de objetos
app.get('/personas', function(req, res){
    res.render('personas', {personas: data});
});

app.listen(port) // Iniciamos el servidor