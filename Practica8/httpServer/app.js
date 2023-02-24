//Se instalaron las dependecias 'express'
const express = require('express')
const app = express()

//Al correr en la terminal, se mostrara el 'Hello World' en el navegador, entonces, este estara esperando a la escucha de la terminal
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(4444)