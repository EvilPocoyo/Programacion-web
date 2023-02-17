//Se esta definiendo un objeto
/*let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri'
}

console.log(obj.nombre)
//Se hardcodea 
console.log(obj['nombre'])

//Al definir una variable con la kye, le pueden llegar datos 
//desde cualquier lado 
let myKey = 'nombre';
//Te devuelve lo que esta almacenado en el atributo de nombre
console.log(obj[myKey]);*/

//--------------------------------------------------------------//

let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',

    //Se crea un a funcion adentro de el objeto
    keypress: function (){
        return 'se ha presionado una tecla'
    },
    mouseOver: function (){
        return 'El puntero del mouse esta arriba'
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey =  'nombre';
console.log(obj[myKey]);

//Se esta reasignando el valor de 'myKey'
myKey = 'keypress';
console.log(obj[myKey]);
myKey = 'mouseOver';
console.log(obj[myKey]);

//--------------------------------------------------------------//

let myArray = [];
//En js los array pueden tener de todo porque js considera que todo
//son objetos
myArray.push(4);
myArray.push('esta es una cadena');
myArray.push(obj);
myArray.push(function(){
    return 'hola desde el array'
})
//Al mostrarlo en la consola, salen todos los push que se
//hicieron anteriormente
console.log(myArray)

//Estamos creando un array de funciones
let funcArray = [];
funcArray.push(()=> {
    console.log('Function 1')
});

funcArray.push(()=> {
    console.log('Function 2')
});

funcArray.push(()=> {
    console.log('Function 3')
});

//Cada vez que 'forEach' itera, se esta invocando una funcion
funcArray.forEach((item) => {
    item();
})

//--------------------------------------------------------------//

//Inyectamos la dependencia
const Emitter = require ('./emitter')

let emtr = new Emitter();

//Estamos agregando 2 funcione con el mismo nombre pero 
//diferentes funciones
emtr.on('greet', () => {
    console.log('Somewhere, someone said hello');
});

//Invocamos a la función “greet”
emtr.on('greet', () => {
    console.log('A greetin occurred!');
});

console.log('HELLO');
emtr.emit('greet');