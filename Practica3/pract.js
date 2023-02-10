function greet() {
    console.log("Hello");
}

let logGreeting = (miParametro) => miParametro();

logGreeting(greet);

//Refactorizacion de codigo como una function 
//expression created on the fly

let logGreeting2 = miParametro => miParametro();
logGreeting2(function (){
    console.log(`Hello from a function created on the fly`)
});

//Ejemplo de arrow function con function expression
//created on the fly

//interpolacion de string "clasica"
let logGreeting3 = (miNombre, miColor) => {
    console.log(`Hola ${miNombre} buenos dias! Tu color favorito es el ${miColor}`);
}
logGreeting3("Jesus", "negro")

let color= "negro";
let talla = "XXL";
let modelo = "Deportiva";

console.log("Juan tiene una playera talla" +  " " +talla + " " + "de color" + " " +color + " " +"modelo" + " " + modelo);
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);