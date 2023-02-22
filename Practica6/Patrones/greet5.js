//El module revealing pattern, solo expone las variables
//y metodos que la persona quiera mediante un objeto
//aqui tenemos que agregar al objeto, todo aquello que 
//queramos que el usuario tenga acceso
let greetiing = 'Hello from greet5';
let greet = () => {
    console.log(greetiing);
}

//Ejemplos
let leer = () => {
    console.log('Leyendo')
}

let jugar = () =>{
    console.log('Jugando')
}

let escribir = () =>{
    console.log('Escribiendo')
}


module.exports = {
    greet : greet, leer, jugar, escribir
}