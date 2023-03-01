/*
¿Qué es un middleware?
Es un software que se ejecuta en medio del cliente y el servidor para proporcionar funciones adicionales a la aplicación, 
como el manejo de sesiones, la autenticación de usuarios, la compresión de archivos, entre otros.

¿Cuál es el significado del término “MEAN stack” ?
MEAN stack es un acrónimo que representa un conjunto de tecnologías para el desarrollo web basado en JavaScript. 
Está compuesto por MongoDB, Express, Angular y Node.js, y se utiliza para crear aplicaciones web de una sola página 
(Single Page Applications - SPA) y aplicaciones escalables de alta demanda.

¿Cuáles son las características/funcionalidades que Express ofrece como middleware?
Unas de las principales cosas que hace es el manejo de solicitudes y respuestas HTTP, la creación de enrutadores 
para manejar múltiples rutas y la implementación de middleware personalizado para agregar funcionalidades adicionales 
a la aplicación.

¿Qué es una ruta en express?
En Express, una ruta se refiere a una URI (Uniform Resource Identifier) específica y al método HTTP asociado 
(GET, POST, PUT, DELETE, etc.).

¿Qué es un “route handler” en express y para qué se utiliza?
Un "route handler" en Express es una función que se ejecuta cuando se realiza una solicitud HTTP en una ruta específica. 
Se utiliza para manejar la lógica de la aplicación y enviar la respuesta adecuada al cliente.

¿Cuáles son los 2 parámetros necesarios para crear una ruta para el método GET con
express, ejemplo: app.get()?
req y res : Manejo de la solicitud y envío de respuesta


¿Qué es lo que hace la instrucción res.send?
La instrucción res.send se utiliza en Express para enviar una respuesta HTTP al cliente

¿Cuál es el motivo por el que express es tan popular?
Express es uno de los frameworks web más populares para Node.js debido a su facilidad de uso, su gran cantidad de 
características y su enfoque minimalista. 
*/ 



const express = require('express'); // importamos la dependencia
const app = express(); //declaramos una app de express

//Esta es la ruta raiz, y lo que pasa al ejectuarse es que regresa
//la cadena 'Hello world, this is the root route'
app.get('/', (req, res)=>{
    res.send('Hello world, this is the root route');
});

//Aca estamos agregando otra ruta agregando el '/uno',
//entonces al agregar la ruta en el navegador
//regresara 'Hello world, from route one'
app.get('/uno', (req, res)=> {
    res.send('Hello world, from route one');
});

//Aqui es el mismo caso que arriba, agregamos otra ruta
//llamada prueba y regresara lo que hay en el html:5
app.get('/prueba', (req, res)=> {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Prueba</title>
    </head>
    <body>
        <h1>Hola</h1>
    </body>
    </html>`);
});

app.listen(3000); // ponemos a la escucha en el puerto 3000