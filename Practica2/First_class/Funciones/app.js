//Sintaxis de funcion ES5
function greet(){
    console.log("Hello");
}

//console.log(greet)
greet();

//Funcion como parametro
function logGreeting(fn){
    fn();
}

logGreeting(greet);
//Estamos pasando la funcion greet como 
//parametro e invocandola con el nombre del argumento fn

//Functionn expression
let greetMe = function (){
    console.log("Hello from the function expression");
}

greetMe();
logGreeting(greetMe);

//Refactorizacion

let greet2 = () => console.log("Hello");
greet2()

let logGreeting2 = fn => {
    fn();
}
logGreeting2(greet2);

let greetMe2 = () => console.log("Hello from the function expression");
greetMe2();

logGreeting2(greetMe2)


let saludo = (nombre, tratamiento) => {
    console.log("Hola" + " " + tratamiento + " " + nombre);
}

//invocamos
saludo("Jesus" , "sr.");

//En caso de tener un solo parametro, se puede simplificar 
//como el siguiente ejemplo

let areaCuadrado = numero => {
    return numero * numero;
}

// Ausensia de las llaves de funcion 
//Las llaves de funcion "{}" se pueden ahorrar cuando solamente
//es una sola linea de codigo 

let cuadrado = numero => numero * numero;

//Ejemplos
function cuadrad0(numero){
    return numero * numero;
}
console.log(cuadrad0(8))

let cuadr4do = numero => {
    return numero * numero;
}
console.log(cuadr4do(8))

let cu4dr4do = numero => numero * numero;

console.log(cu4dr4do(8))