// Se instalo el paquete de dependencias para luego tomar como referencia los ejemplo del creador del paquete.

//Convierte de Fahrenheit a Celsius
const { toCelsius } = require("celsius");

toCelsius(100); // 38
toCelsius(100, 3); // 37.778
toCelsius('105.981 degrees F', 5); // 41.10056

//Convierte de Celsius a Fahrenheit
const { toFahrenheit } = require("celsius");

toFahrenheit(36); // 97
toFahrenheit(36.68, 3); // 98.024
toFahrenheit('-40.691 degrees C', 5); // -41.24380

//El codigo fuente del creador no devolvia ningun valor, por lo tanto se agrego el comando console.log para saber que valores son los que regresan.
//Manda a llamar a la funcion de la siguiente manera 
console.log( toCelsius(100));
console.log( toFahrenheit(38));


// Una vez que ya vimos que es lo que tiene el paquete, se puede simplpificar un poco mas el codigo fuente. 
const convertidor = require("celsius");
console.log(convertidor.toCelsius(100)); 
console.log(convertidor.toFahrenheit(38));