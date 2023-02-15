//Queremos tomar la funcion del archivo greet
//por lo tanto hacemos un require y esto hacr que desde el archivo app.js
//haga llamada a la funcion

require('./greet')

//Pero al momento que lo queremos ejecutar como una funcion no nos lo permite
//porque dentro de cada 'modulo' es 'self contained' y su acceso es 'protect'

greet();


//Ahora definiendo esta variable y agregando el 'module.export' 
//en el archivo 'greet.js' estamos permitiendo exportar el 
//contenido de ese 'modulo'

let greet = require('./greet')

greet();