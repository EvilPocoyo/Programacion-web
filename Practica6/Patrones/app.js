let greet = require('./greet1');
greet();

//Se manda a llamar al objeto, y para hacerla funcionar se inyecta
//la funcion greet
//Estas dos funcoines son equivalentes
let greet2 = require('./greet2').greet;
greet2();

let greet2a = require('./greet2');
greet2a.greet()

//Imprime directamente lo que hay en la funcion, pero 
//no puede acceder a la funcion greet ya que es privada
let greet3 = require('./greet3');
console.log(greet3);
greet3.greet();

let greet2j = require('./greet2');
const { greeting } = require('./greet3');
let greet3a = require('./greet3');
greet();
greet2j.greet();

greet3a.greet()
greet3.greeting = 'Hello from app';

let greet3b = require('./greet3');
greet3b.greet();


const Greet4 = require('./greet4');
let myGreet =  new (Greet4);
myGreet.greet();


const greet5 = require('./greet5');
greet5.greet();
greet5.escribir();
greet5.jugar();
greet5.leer();