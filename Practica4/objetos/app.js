let obj = {};

//se crea el objeto persona 
let persona = {
    nombre : 'Carlos',
    apellidos : 'Ulibarri',

    getName: function (){
        return `${this.nombre} ${this.apellidos}`
    },

//se agrega un objeto como propiedad del objeto persona
    domicilio: {
        calle : 'Madero #144',
        colonia: 'Centro',
        cp: 28000,
        municipio : 'Colima'
    }, 

    getDom: function (){
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} Cp ${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}

console.log(persona);

//Al momento de poner un atributo despues del punto 
//estamos solicitando algo en concreto del objeto 'persona'
//en este caso estamos solicitando 'nombre', 'apellidos' y 'domicilio'
console.log(persona.nombre);
console.log(persona.apellidos);
console.log(persona.domicilio);

//Aqui invocamos la funcion 'getName' y 'getDom'
console.log(persona.getName());
console.log(persona.getDom());

